// src/app/api/github/route.js
import { NextResponse } from 'next/server';

export async function GET() {
    const username = process.env.NEXT_GITHUB_USERNAME;
    const token = process.env.NEXT_GITHUB_TOKEN;

    if (!username || !token) {
        return NextResponse.json({ error: 'GitHub credentials not configured.' }, { status: 500 });
    }

    const headers = { Authorization: `token ${token}` };
    const nextConfig = { next: { revalidate: 3600 } };

    try {
        // 1. Siapkan Kueri GraphQL untuk mengambil total kontribusi
        const year = new Date().getFullYear();
        const fromDate = `${year}-01-01T00:00:00Z`;
        const toDate = `${year}-12-31T23:59:59Z`;

        const graphqlQuery = {
            query: `
                query($userName: String!, $from: DateTime!, $to: DateTime!) {
                  user(login: $userName) {
                    contributionsCollection(from: $from, to: $to) {
                      contributionCalendar {
                        totalContributions
                      }
                    }
                  }
                }
            `,
            variables: {
                userName: username,
                from: fromDate,
                to: toDate,
            },
        };

        // 2. Tambahkan fetch GraphQL ke Promise.all
        const [eventsRes, userRes, contributionsRes] = await Promise.all([
            fetch(`https://api.github.com/users/${username}/events/public`, { headers, ...nextConfig }),
            fetch(`https://api.github.com/users/${username}`, { headers, ...nextConfig }),
            fetch('https://api.github.com/graphql', {
                method: 'POST',
                headers,
                body: JSON.stringify(graphqlQuery),
                ...nextConfig,
            })
        ]);

        if (!eventsRes.ok || !userRes.ok || !contributionsRes.ok) {
            throw new Error('Failed to fetch data from GitHub');
        }

        const events = await eventsRes.json();
        const userData = await userRes.json();
        const contributionsData = await contributionsRes.json();

        // Logika untuk recent commits
        const recentCommits = events
            .filter((event) => event.type === 'PushEvent' && event.payload.commits)
            .slice(0, 3)
            .map((event) => ({
                repo: event.repo.name,
                message: event.payload.commits[0].message,
                url: `https://github.com/${event.repo.name}/commit/${event.payload.commits[0].sha}`,
                date: event.created_at,
            }));

        // 3. Update objek stats dengan data dinamis
        const stats = {
            totalRepos: userData.public_repos,
            followers: userData.followers,
            // Ambil data dari hasil query GraphQL
            commitsThisYear: contributionsData.data.user.contributionsCollection.contributionCalendar.totalContributions,
        };

        const responseData = {
            recentCommits,
            stats,
        };

        return NextResponse.json(responseData);

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}