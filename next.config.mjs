/** @type {import('next').NextConfig} */
const nextConfig = {
	webpack(config) {
	  config.module.rules.push({
		test: /\.svg$/,
		use: ['@svgr/webpack'],
	  });
  
	  return config;
	},
	images: {
		domains: ['cdn2.thecatapi.com'],
	  },
  };
  
  export default nextConfig;
  