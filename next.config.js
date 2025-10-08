/** @type {import('next').NextConfig} */
import createNextIntlPlugin from "next-intl/plugin";
const nextConfig = {};

const withNextIntl = createNextIntlPlugin(
    "./in18/request.ts"
);
export default withNextIntl(nextConfig);
