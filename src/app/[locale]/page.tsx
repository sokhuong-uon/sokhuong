import { HeroSection } from "@/components/hero/hero-section";
import { ValueSection } from "@/components/value/value-section";

import { ThemeRadiusCustomizer } from "@/features/theme/components/theme-radius-customizer";
import { ThemeModeCustomizer } from "@/features/theme/components/theme-mode-customizer";

import dynamic from "next/dynamic";
import { ThemeColorCustomizerSkeleton } from "@/features/theme/components/theme-color-customizer-skeleton";

const DynamicThemeColorCustomizer = dynamic(
	() =>
		import("@/features/theme/components/theme-color-customizer").then(
			(mod) => mod.ThemeColorCustomizer
		),
	{
		loading: () => <ThemeColorCustomizerSkeleton />,
	}
);

export default function Home() {
	return (
		<main
			id="main"
			className="flex items-center justify-center w-full flex-col"
		>
			<HeroSection />
			<div className="flex flex-col space-y-6">
				<ThemeModeCustomizer className="container" />
				<ThemeRadiusCustomizer className="container" />
				<DynamicThemeColorCustomizer className="container" />
			</div>
			<ValueSection />
		</main>
	);
}
