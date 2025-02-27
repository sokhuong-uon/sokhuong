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
}

export default withNextIntl(withMDX(nextConfig))
