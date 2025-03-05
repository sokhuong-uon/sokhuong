import createMdx from '@next/mdx'
import createNextIntlPlugin from 'next-intl/plugin'

const withMDX = createMdx({
	options: {
		remarkPlugins: [],
		rehypePlugins: [],
	},
})

const withNextIntl = createNextIntlPlugin()

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

export default withNextIntl(withMDX(nextConfig))
