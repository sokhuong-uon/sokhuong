import createMiddleware from 'next-intl/middleware'

import { defaultLocale, locales } from './i18n'

export const config = {
	matcher: ['/((?!api|_next|icon|image|logo|favicon.ico|placeholder.svg).*)'],
}

export default createMiddleware({
	locales,
	defaultLocale,
	localePrefix: 'as-needed',
})
