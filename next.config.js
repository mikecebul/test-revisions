import { withPayload } from '@payloadcms/next/withPayload'

import redirects from './redirects.js'

const baseUrl =
  process.env.NEXT_PUBLIC_VERCEL_ENV === 'production'
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.NEXT_PUBLIC_VERCEL_ENV === 'preview'
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_BRANCH_URL}`
      : 'http://localhost:3000'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      ...[baseUrl].map((item) => {
        const url = new URL(item)

        return {
          hostname: url.hostname,
          protocol: url.protocol.replace(':', ''),
        }
      }),
    ],
  },
  reactStrictMode: true,
  redirects,
}

export default withPayload(nextConfig)
