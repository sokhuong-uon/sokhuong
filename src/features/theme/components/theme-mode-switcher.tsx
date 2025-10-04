'use client'

import { DropdownMenuTriggerProps } from '@radix-ui/react-dropdown-menu'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export function ThemeModeSwitcher(props: DropdownMenuTriggerProps) {
	const { setTheme, theme } = useTheme()

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
			<DropdownMenuTrigger asChild {...props}>
				<Button variant="ghost" size="icon" className="flex">
					<Sun className="mx-auto h-5 w-5 rotate-0 transition-all dark:hidden dark:-rotate-90" />
					<Moon className="mx-auto hidden h-5 w-5 rotate-90 transition-all dark:block dark:rotate-0" />
					<span className="sr-only">ToggleMode</span>
				</Button>
			</DropdownMenuTrigger>

			<DropdownMenuContent align="end">
				{availableThemes.map((availableTheme) => (
					<DropdownMenuItem
						onClick={() => setTheme(availableTheme.value)}
						key={availableTheme.value}
					>
						{availableTheme.label}
						{theme === availableTheme.value && (
							<span className="ml-2 text-2xl leading-none">&bull;</span>
						)}
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
