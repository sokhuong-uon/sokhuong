import { ComponentProps } from 'react'

import { ThemeModeSwitcher } from '@/features/theme/components/theme-mode-switcher'
import { cn } from '@/lib/utils'

export function Footer({ className, ...props }: ComponentProps<'footer'>) {
	return (
		<footer {...props} className={cn('py-4', className)}>
			<div className="flex justify-between">
				<div></div>
				<ThemeModeSwitcher />
			</div>
		</footer>
	)
}
