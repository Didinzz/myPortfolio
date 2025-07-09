// src/components/EmailTemplate.jsx

import * as React from 'react';

// Definisikan tipe props untuk kejelasan
// interface EmailTemplateProps {
//   name: string;
//   email: string;
//   subject: string;
//   message: string;
// }

// Gunakan object untuk styling agar lebih rapi
const main = {
    backgroundColor: '#f6f9fc',
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
    backgroundColor: '#ffffff',
    margin: '0 auto',
    padding: '20px 0 48px',
    marginBottom: '64px',
    maxWidth: '580px',
    border: '1px solid #e6ebf1',
    borderRadius: '5px',
};

const box = {
    padding: '0 48px',
};

const h1 = {
    color: '#333',
    fontSize: '24px',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: '30px 0',
};

const hr = {
    borderColor: '#e6ebf1',
    margin: '20px 0',
};

const paragraph = {
    color: '#525f7f',
    fontSize: '16px',
    lineHeight: '24px',
    textAlign: 'left',
};

const anchor = {
    color: '#556cd6',
};

const footer = {
    color: '#8898aa',
    fontSize: '12px',
    lineHeight: '16px',
};


export const EmailTemplate = ({ name, email, subject, message }) => (
    <div style={main}>
        <div style={container}>
            <div style={box}>
                <h1 style={h1}>Pesan Baru dari Form Kontak</h1>
                <hr style={hr} />
                <p style={paragraph}>Anda telah menerima pesan baru dengan detail sebagai berikut:</p>

                <p style={paragraph}>
                    <strong>Nama Pengirim:</strong> {name}
                </p>
                <p style={paragraph}>
                    <strong>Alamat Email:</strong> <a href={`mailto:${email}`} style={anchor}>{email}</a>
                </p>
                <p style={paragraph}>
                    <strong>Subjek:</strong> {subject}
                </p>

                <hr style={hr} />

                <h2 style={{ ...h1, fontSize: '20px', textAlign: 'left' }}>Isi Pesan:</h2>
                <p style={{ ...paragraph, whiteSpace: 'pre-wrap', backgroundColor: '#f8f8f8', padding: '15px', borderRadius: '4px' }}>
                    {message}
                </p>

                <hr style={hr} />
                <p style={footer}>
                    Email ini dikirim dari form kontak website Anda | &copy; {new Date().getFullYear()}
                </p>
            </div>
        </div>
    </div>
);