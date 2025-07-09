// src/app/api/send/route.js

import { EmailTemplate } from '@/components/EmailTemplate';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Ambil API key dari environment variables
const resend = new Resend(process.env.NEXT_RESEND_API_KEY);

export async function POST(req) {
    try {
        // Parse body dari request yang masuk
        const body = await req.json();
        const { name, email, subject, message } = body;

        // Kirim email menggunakan Resend
        const { data, error } = await resend.emails.send({
            from: 'Contact Form <onboarding@resend.dev>', // Wajib: Alamat email dari domain terverifikasi Anda
            to: ['didinzakaria123@gmail.com'], // Alamat email pribadi Anda
            subject: `New Message from Contact Form: ${subject}`,
            react: EmailTemplate({ name, email, subject, message }),
        });

        // Jika ada error dari Resend
        if (error) {
            return NextResponse.json({ error: error.message }, { status: 400 });
        }

        // Jika berhasil
        return NextResponse.json({ message: "Email sent successfully!", data });
    } catch (error) {
        // Jika ada error lain
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}