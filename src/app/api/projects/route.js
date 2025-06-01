// src/app/api/projects/route.js
import { supabase } from '@/lib/supabaseClient'
import { NextResponse } from 'next/server'

export async function GET() {
    const { data, error } = await supabase
        .from('myprojects')
        .select('*')
        .order('id', { ascending: true })

    if (error) {
        return new Response(JSON.stringify({ message: 'Error fetching data', error }), {
            status: 500,
        })
    }

    return NextResponse.json({status:200, message: "Data fetched successfully", data })
}
