import { HeroSection } from '@/components/hero/hero-section'
import { SkillSection } from '@/features/skill/components/tech-section'
import { ThemeColorCustomizer } from '@/features/theme/components/theme-color-customizer'
import { ThemeModeCustomizer } from '@/features/theme/components/theme-mode-customizer'
import { ThemeRadiusCustomizer } from '@/features/theme/components/theme-radius-customizer'
import { ValueList } from '@/features/value/components/value-list'

export default function Home() {
	return (
		<main
			id="main"
			className="flex w-full flex-col items-center justify-center"
		>
			<HeroSection />
			<div className="flex flex-col space-y-6">
				<ThemeModeCustomizer className="container" />
				<ThemeRadiusCustomizer className="container" />
				<ThemeColorCustomizer className="container" />
			</div>

			<section className="container py-24">
				<ValueList />
			</section>

			<SkillSection />
		</main>
	)
}
