// src/app/api/github/route.js
import { NextResponse } from 'next/server';

export async function GET() {
    const username = process.env.NEXT_GITHUB_USERNAME;
    const token = process.env.NEXT_GITHUB_TOKEN;

    if (!username || !token) {
        return NextResponse.json({ error: 'GitHub credentials not configured.' }, { status: 500 });
    }

    const headers = { Authorization: `token ${token}` };
    const nextConfig = { next: { revalidate: 3600 } }; // Cache for 1 hour

    try {
        // Jalankan semua fetch secara paralel
        const [eventsRes, userRes] = await Promise.all([
            fetch(`https://api.github.com/users/${username}/events/public`, { headers, ...nextConfig }),
            fetch(`https://api.github.com/users/${username}`, { headers, ...nextConfig })
        ]);

        if (!eventsRes.ok || !userRes.ok) {
            throw new Error('Failed to fetch data from GitHub');
        }

        const events = await eventsRes.json();
        const userData = await userRes.json();

        // Logika untuk recent commits (tetap sama)
        const recentCommits = events
            .filter((event) => event.type === 'PushEvent' && event.payload.commits)
            .slice(0, 3)
            .map((event) => ({
                repo: event.repo.name,
                message: event.payload.commits[0].message,
                url: `https://github.com/${event.repo.name}/commit/${event.payload.commits[0].sha}`,
                date: event.created_at,
            }));

        // Logika untuk Activity Stats
        const stats = {
            totalRepos: userData.public_repos,
            followers: userData.followers,
            commitsThisYear: 0, // Akan dihitung dari kalender kontribusi
        };

        // Data yang dikirim ke frontend
        const responseData = {
            recentCommits,
            stats,
        };

        return NextResponse.json(responseData);

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}