/** @type {import('next').NextConfig} */
const repoName = "atlasflash-Landing";

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  productionBrowserSourceMaps: false,
  output: "export",
  trailingSlash: true,
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}`,
  images: { unoptimized: true },
};

export default nextConfig;
