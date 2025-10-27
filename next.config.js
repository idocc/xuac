/** @type {import('next').NextConfig} */
import createNextIntlPlugin from "next-intl/plugin";
const nextConfig = {
    // output: "export",
    // assetPrefix: "",
    // basePath: "",
    // trailingSlash: true,
    // images: {
    //     unoptimized: true,
    // },
};

const withNextIntl = createNextIntlPlugin(
    "./in18/request.ts"
);
export default withNextIntl(nextConfig);
