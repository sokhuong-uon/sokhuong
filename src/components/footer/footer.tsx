import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ComponentProps } from "react";
import { cn } from "@/lib/utils";
import { ComponentIcon, DraftingCompassIcon } from "lucide-react";

export function Footer({ className, ...props }: ComponentProps<"footer">) {
	return (
		<footer {...props} className={cn(className)}>
			<div className="relative col-span-3 h-full py-20">
				<div className="w-full h-full p-16 pt-10 md:px-10">
					<div className="flex flex-col items-center justify-center w-full h-full gap-3">
						<div className="flex items-center gap-2">
							<ComponentIcon className="w-4 h-4" />
							<p className="text-gray-600 dark:text-gray-400">
								Pick the right tech
							</p>
						</div>
						<p className="mt-4 text-xl max-w-md sm:text-4xl font-normal tracking-tighter text-center">
							<strong>Maintainable code with brilliant tools</strong>
						</p>
						<div className="flex mt-[10px] z-20 justify-center items-start">
							Next.js, Framer motion, etc.
						</div>
						<Button
							asChild
							variant="outline"
							className="mt-5 flex gap-3 uppercase"
						>
							<Link href="/sketch">
								<DraftingCompassIcon />
								<p>See my sketch</p>
							</Link>
						</Button>
					</div>
				</div>
			</div>
		</footer>
	);
}
