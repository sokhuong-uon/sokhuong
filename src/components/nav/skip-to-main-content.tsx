import { getTranslations } from 'next-intl/server'

import { Button } from '@/components/ui/button'

export async function SkipToMainContent() {
	const t = await getTranslations('Layout')
	return (
		<Button
			asChild
			className="absolute left-2 top-2 z-50 h-0 overflow-hidden px-0 py-0"
		>
			<a
				href="#main"
				className="overflow-hidden p-0 underline focus-within:h-fit focus-within:p-4 focus:outline-none"
			>
				{t('Skip to main content')}
			</a>
		</Button>
	)
}
