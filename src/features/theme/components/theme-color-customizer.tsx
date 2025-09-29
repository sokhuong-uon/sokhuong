'use client'

import { useState } from 'react'

import { CheckIcon } from '@radix-ui/react-icons'
import { LoaderCircle } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { useThemeStore } from '@/features/theme/store/use-theme-store'
import { Theme, themes } from '@/features/theme/utils/themes'
import { cn } from '@/lib/utils'

export function ThemeColorCustomizer({ className }: { className?: string }) {
	const currentTheme = useThemeStore((state) => state.theme)
	const setTheme = useThemeStore((state) => state.setTheme)
	const [isLoadingNewTheme, setIsLoadingNewTheme] = useState(false)
	const [newTheme, setNewTheme] = useState<Theme['name']>()

	const { resolvedTheme: mode } = useTheme()

	const onThemeChange = async (theme: Theme['name']) => {
		setNewTheme(theme)

		setIsLoadingNewTheme(true)
		await Promise.all([
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			import(`@/assets/css/themes/blue.css`),
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			import(`@/assets/css/themes/green.css`),
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			import(`@/assets/css/themes/orange.css`),
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			import(`@/assets/css/themes/rose.css`),
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			import(`@/assets/css/themes/violet.css`),
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			import(`@/assets/css/themes/yellow.css`),
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			import(`@/assets/css/themes/zinc.css`),
		])
		setIsLoadingNewTheme(false)

		setTheme(theme)
	}

	return (
		<RadioGroup
			defaultValue={currentTheme}
			onValueChange={onThemeChange}
			className={cn('flex justify-center gap-2', className)}
		>
			{themes.map((theme) => {
				const isActive = currentTheme === theme.name

				return (
					<div key={theme.name}>
						<RadioGroupItem
							value={theme.name}
							id={theme.name}
							className="absolute h-0 w-0 opacity-0"
							aria-label={`Select ${theme.label} theme`}
						/>
						<Label htmlFor={theme.name} className="cursor-pointer">
							<div
								style={
									{
										'--theme-primary': `hsl(${
											theme?.activeColor[mode === 'dark' ? 'dark' : 'light']
										})`,
									} as React.CSSProperties
								}
								className={cn(
									'relative h-8 w-8 rounded-[--radius] antialiased',
									isActive && 'border-2'
								)}
								aria-hidden="true"
							>
								<div
									className={cn(
										'flex h-full w-full items-center justify-center rounded-[--radius] bg-[--theme-primary]'
									)}
								>
									{isLoadingNewTheme && newTheme === theme.name && (
										<LoaderCircle className="h-5 w-5 animate-spin [animation-duration:1500ms]" />
									)}
									{!isLoadingNewTheme && isActive && (
										<CheckIcon className="h-5 w-5 text-white" />
									)}
								</div>
							</div>
							<span className="sr-only">
								{theme.label} theme{isActive ? ' (currently selected)' : ''}
								{isLoadingNewTheme && newTheme === theme.name
									? ' (loading...)'
									: ''}
							</span>
						</Label>
					</div>
				)
			})}
		</RadioGroup>
	)
}
