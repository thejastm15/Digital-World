/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "http",
				hostname: "localhost",
			},
			{
				protocol: "https",
				hostname: "digitalhippo-production.up.railway.app",
			},
		],
	},
};

module.exports = {
	typescript: {
	  // !! WARN !!
	  // Dangerously allow production builds to successfully complete even if
	  // your project has type errors.
	  // !! WARN !!
	  ignoreBuildErrors: true,
	},
  }

module.exports = nextConfig;
