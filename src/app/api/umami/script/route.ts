import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
	try {
		const response = await fetch(
			// eslint-disable-next-line n/no-process-env
			`${process.env.NEXT_PUBLIC_UMAMI_BASE_URL}/script.js`,
			{
				headers: {
					'User-Agent': request.headers.get('user-agent') || '',
				},
			}
		)

		const script = await response.text()

		return new NextResponse(script, {
			status: 200,
			headers: {
				'Content-Type': 'application/javascript',
				'Cache-Control': 'public, max-age=86400',
				'Access-Control-Allow-Origin': '*',
			},
		})
	} catch (error) {
		console.error('Umami script proxy error:', error)
		return new NextResponse('// Umami script failed to load', {
			status: 200,
			headers: { 'Content-Type': 'application/javascript' },
		})
	}
}
