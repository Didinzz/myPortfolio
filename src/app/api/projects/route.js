// src/app/api/projects/route.js
import { supabase } from '@/lib/supabaseClient'
import { NextResponse } from 'next/server'

// ✅ Tambahkan baris ini untuk caching di sisi server
// Cache akan revalidasi (diperbarui) paling cepat setiap 300 detik (5 menit)
export const revalidate = 300

export async function GET() {
    console.log('Fetching data from Supabase...'); // Anda akan lihat ini di log server hanya setiap 5 menit

    const { data, error } = await supabase
        .from('projects')
        .select()
        .order('id', { ascending: true })

    if (error) {
        return NextResponse.json({ message: 'Error fetching data', error }, { status: 500 });
    }

    if (!data || data.length === 0) {
        return NextResponse.json({ status: 200, message: "No data found", data: [] });
    }

    // Header Cache-Control ini tetap berguna untuk browser/CDN
    const response = NextResponse.json({ status: 200, message: "Data fetched successfully", data });
    response.headers.set('Cache-Control', 'public, max-age=60, stale-while-revalidate=240');

    return response;
}