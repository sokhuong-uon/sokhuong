"use client";
import { useTheme } from "next-themes";
import { Radius, useThemeStore } from "@/features/theme/store/use-theme-store";
import { themes } from "@/features/theme/utils/themes";
import { ThemeWrapper } from "./theme-wrapper";
import { Button } from "@/components/ui/button";
import { CheckIcon, MoonIcon, ResetIcon, SunIcon } from "@radix-ui/react-icons";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export function ThemeCustomizer({ className }: { className?: string }) {
	const currentTheme = useThemeStore((state) => state.theme);
	const setTheme = useThemeStore((state) => state.setTheme);

	const radius = useThemeStore((state) => state.radius);
	const setRadius = useThemeStore((state) => state.setRadius);

	const { resolvedTheme: mode, setTheme: setMode } = useTheme();

	return (
		<ThemeWrapper
			defaultTheme="zinc"
			className={cn("flex flex-col space-y-4 md:space-y-6", className)}
		>
			<div className="flex items-start pt-4 md:pt-0">
				<Button
					variant="ghost"
					size="icon"
					className="ml-auto rounded-[0.5rem]"
					onClick={() => {
						setTheme("zinc");
						setRadius(0.5);
					}}
				>
					<ResetIcon />
					<span className="sr-only">Reset</span>
				</Button>
			</div>
			<div className="flex flex-1 flex-col space-y-4 md:space-y-6">
				<div className="space-y-1.5">
					<Label className="text-xs">Color</Label>
					<div className="grid grid-cols-3 gap-2">
						{themes.map((theme) => {
							const isActive = currentTheme === theme.name;

							return (
								<Button
									variant={"outline"}
									size="sm"
									key={theme.name}
									onClick={() => {
										setTheme(theme.name);
									}}
									className={cn(
										"justify-start",
										isActive && "border-2 border-primary"
									)}
									style={
										{
											"--theme-primary": `hsl(${
												theme?.activeColor[mode === "dark" ? "dark" : "light"]
											})`,
										} as React.CSSProperties
									}
								>
									<span
										className={cn(
											"mr-1 flex h-5 w-5 shrink-0 -translate-x-1 items-center justify-center rounded-full bg-[--theme-primary]"
										)}
									>
										{isActive && <CheckIcon className="h-4 w-4 text-white" />}
									</span>
									{theme.label}
								</Button>
							);
						})}
					</div>
				</div>
				<div className="space-y-1.5">
					<Label className="text-xs">Radius</Label>
					<div className="grid grid-cols-5 gap-2">
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
				</div>
				<div className="space-y-1.5">
					<Label className="text-xs">Mode</Label>
					<div className="grid grid-cols-3 gap-2">
						<Button
							variant={"outline"}
							size="sm"
							onClick={() => setMode("light")}
							className={cn(mode === "light" && "border-2 border-primary")}
						>
							<SunIcon className="mr-1 -translate-x-1" />
							Light
						</Button>
						<Button
							variant={"outline"}
							size="sm"
							onClick={() => setMode("dark")}
							className={cn(mode === "dark" && "border-2 border-primary")}
						>
							<MoonIcon className="mr-1 -translate-x-1" />
							Dark
						</Button>
					</div>
				</div>
			</div>
		</ThemeWrapper>
	);
}
