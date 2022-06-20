/** @type {import('next').NextConfig} */
const securityHeaders = [
  
]
module.exports = {
  // async headers() {
  //   return [
  //     {
  //       source: '/(.*)',
  //       headers: securityHeaders,
  //     }
  //   ]
  // },
  webpack(config) {
    return config
  },
  reactStrictMode: true,
}
