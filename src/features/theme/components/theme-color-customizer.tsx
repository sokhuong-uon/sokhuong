"use client";

import { useTheme } from "next-themes";
import { useThemeStore } from "@/features/theme/store/use-theme-store";
import { themes } from "@/features/theme/utils/themes";
import { CheckIcon } from "@radix-ui/react-icons";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import "@/app/[locale]/themes.css";

export function ThemeColorCustomizer({ className }: { className?: string }) {
	const currentTheme = useThemeStore((state) => state.theme);
	const setTheme = useThemeStore((state) => state.setTheme);

	const { resolvedTheme: mode } = useTheme();

	return (
		<RadioGroup
			defaultValue={currentTheme}
			onValueChange={setTheme}
			className={cn("flex justify-center gap-2", className)}
		>
			{themes.map((theme) => {
				const isActive = currentTheme === theme.name;

				return (
					<div key={theme.name}>
						<RadioGroupItem
							value={theme.name}
							id={theme.name}
							className="opacity-0 w-0 h-0 absolute"
						/>
						<Label htmlFor={theme.name} className="cursor-pointer">
							<div
								style={
									{
										"--theme-primary": `hsl(${
											theme?.activeColor[mode === "dark" ? "dark" : "light"]
										})`,
									} as React.CSSProperties
								}
								className={cn(
									"h-8 w-8 relative rounded-[--radius] antialiased",
									isActive && "border-2"
								)}
							>
								<div
									className={cn(
										"bg-[--theme-primary] rounded-[--radius] w-full h-full flex items-center justify-center"
									)}
								>
									{isActive && <CheckIcon className="h-4 w-4 text-white" />}
								</div>
							</div>
						</Label>
					</div>
				);
			})}
		</RadioGroup>
	);
}
