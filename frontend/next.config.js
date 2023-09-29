/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        API_URL: "http://localhost:3000",
        GATEWAY_URL: "http://gateway:8000"
    }
}

module.exports = nextConfig
