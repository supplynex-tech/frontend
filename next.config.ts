import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    /* config options here */
    typescript: {
        ignoreBuildErrors: true,  // ✅ Ignore type errors during build
    },
};

export default nextConfig;
