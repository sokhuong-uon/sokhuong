"use client";

import { cn } from "@/lib/utils";
import { useThemeStore } from "@/features/theme/store/use-theme-store";
import { themes } from "@/features/theme/utils/themes";

type ThemeWrapperProps = React.ComponentProps<"div"> & {
	defaultTheme?: (typeof themes)[number]["name"];
};

export function ThemeWrapper({
	defaultTheme,
	children,
	className,
}: ThemeWrapperProps) {
	const theme = useThemeStore((state) => state.theme);
	const radius = useThemeStore((state) => state.radius);

	return (
		<div
			className={cn(`theme-${defaultTheme || theme}`, "w-full", className)}
			style={
				{
					"--radius": `${defaultTheme ? 0.5 : radius}rem`,
				} as React.CSSProperties
			}
		>
			{children}
		</div>
	);
}
