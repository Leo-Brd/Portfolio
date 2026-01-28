import { i18n } from'./next-i18next.config.js';

/** @type {import('next').NextConfig} */
const nextConfig = {
    i18n,
    eslint: {
        ignoreDuringBuilds: true,
    },
};

export default nextConfig;
