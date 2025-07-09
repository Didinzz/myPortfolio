/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'skvazzicarumqzurknvd.storage.supabase.co', // Hostname yang benar dari kode Anda
                port: '',
                pathname: '/storage/v1/object/public/images/**', // Mengizinkan semua gambar dari folder ini
            },
        ],
    },
};

module.exports = nextConfig;
