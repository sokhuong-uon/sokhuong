import { ThemeColorPalette } from '@/features/theme/components/theme-color-palette'

export function HeroSection() {
	return (
		<div className="container flex h-fit max-h-[100vw] flex-col items-center justify-center gap-10 py-24 lg:py-36">
			<div className="flex gap-4">
				<ThemeColorPalette />
			</div>
		</div>
	)
}
