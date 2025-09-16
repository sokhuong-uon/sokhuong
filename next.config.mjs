import createMdx from '@next/mdx'
import { initOpenNextCloudflareForDev } from '@opennextjs/cloudflare'

const withMDX = createMdx({
	options: {
		remarkPlugins: [],
		rehypePlugins: [],
	},
})

/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ['ts', 'tsx', 'mdx'],
	experimental: {
		mdxRs: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'vdievlpzbfjzycxrjffq.supabase.co',
				pathname: '/storage/v1/object/public/model-store/**',
			},
		],
	},
}

export default withMDX(nextConfig)

initOpenNextCloudflareForDev()
