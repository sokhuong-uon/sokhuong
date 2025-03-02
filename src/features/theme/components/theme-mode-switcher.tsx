'use client'

import { Moon, Sun } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export function ThemeModeSwitcher() {
	const { setTheme, theme } = useTheme()
	const t = useTranslations('DarkMode')

	const availableThemes = [
		{
			label: 'Light',
			value: 'light',
		},
		{
			label: 'Dark',
			value: 'dark',
		},
		{
			label: 'System',
			value: 'system',
		},
	]

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" size="icon">
					<Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
					<Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
					<span className="sr-only">{t('ToggleMode')}</span>
				</Button>
			</DropdownMenuTrigger>

			<DropdownMenuContent align="end">
				{availableThemes.map((availableTheme) => (
					<DropdownMenuItem
						onClick={() => setTheme(availableTheme.value)}
						key={availableTheme.value}
					>
						{t(availableTheme.label)}
						{theme === availableTheme.value && (
							<span className="ml-2 text-2xl leading-none">&bull;</span>
						)}
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
