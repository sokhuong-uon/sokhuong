'use client'

import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function ThemeModeCustomizer({ className }: { className?: string }) {
	const { setTheme: setMode } = useTheme()

	return (
		<div className={cn('flex justify-center gap-2', className)}>
			<Button
				variant={'outline'}
				size="sm"
				onClick={() => setMode('light')}
				className="border-2 border-primary dark:border-none"
			>
				<SunIcon className="mr-1 -translate-x-1" />
				Light
			</Button>
			<Button
				variant={'outline'}
				size="sm"
				onClick={() => setMode('dark')}
				className="border-muted dark:border-2 dark:border-primary"
			>
				<MoonIcon className="mr-1 -translate-x-1" />
				Dark
			</Button>
		</div>
	)
}
