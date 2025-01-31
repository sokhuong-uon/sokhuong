"use client";

import { Radius, useThemeStore } from "@/features/theme/store/use-theme-store";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ThemeRadiusCustomizer({ className }: { className?: string }) {
	const radius = useThemeStore((state) => state.radius);
	const setRadius = useThemeStore((state) => state.setRadius);

	return (
		<div className={cn("flex justify-center gap-2", className)}>
			{["0", "0.3", "0.5", "0.75", "1.0"].map((value) => {
				return (
					<Button
						variant={"outline"}
						size="sm"
						key={value}
						onClick={() => {
							setRadius(parseFloat(value) as Radius);
						}}
						className={cn(
							radius === parseFloat(value) && "border-2 border-primary"
						)}
					>
						{value}
					</Button>
				);
			})}
		</div>
	);
}
