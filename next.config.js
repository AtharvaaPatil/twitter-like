/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    MONGO_URI:"mongodb+srv://master:twittermaster@twitter-like.hlyy6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  }
}

module.exports = nextConfig
