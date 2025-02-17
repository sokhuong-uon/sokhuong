import Link from 'next/link'
import { ComponentProps } from 'react'

import { ComponentIcon, DraftingCompassIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function Footer({ className, ...props }: ComponentProps<'footer'>) {
	return (
		<footer {...props} className={cn(className)}>
			<div className="relative col-span-3 h-full py-20">
				<div className="h-full w-full p-16 pt-10 md:px-10">
					<div className="flex h-full w-full flex-col items-center justify-center gap-3">
						<div className="flex items-center gap-2">
							<ComponentIcon className="h-4 w-4" />
							<p className="text-gray-600 dark:text-gray-400">
								Pick the right tech
							</p>
						</div>
						<p className="mt-4 max-w-md text-center text-xl font-normal tracking-tighter sm:text-4xl">
							<strong>Maintainable code with brilliant tools</strong>
						</p>
						<div className="z-20 mt-[10px] flex items-start justify-center">
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
	)
}
