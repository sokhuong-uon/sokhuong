import Link from 'next/link'

import { Button } from '@/components/ui/button'

export function Navbar() {
	return (
		<nav className="flex w-full bg-white/40 px-4 py-4 shadow-sm backdrop-blur-md dark:bg-black/40">
			<ul aria-label="menu" className="flex w-full gap-4">
				<li className="mr-auto">
					<Button
						asChild
						variant={'link'}
						size={'lg'}
						className="px-2 focus-within:underline sm:px-4"
					>
						<Link href="/">Home</Link>
					</Button>
				</li>
				<li>
					<Button
						asChild
						variant={'link'}
						size={'lg'}
						className="px-2 focus-within:underline sm:px-4"
					>
						<Link prefetch href="/store">
							Store
						</Link>
					</Button>
				</li>
				<li>
					<Button
						asChild
						variant={'link'}
						size={'lg'}
						className="px-2 focus-within:underline sm:px-4"
					>
						<Link prefetch href="/sketch">
							Sketch
						</Link>
					</Button>
				</li>
				<li>
					<Button
						asChild
						variant={'link'}
						size={'lg'}
						className="px-2 focus-within:underline sm:px-4"
					>
						<Link prefetch href="/about">
							About
						</Link>
					</Button>
				</li>
			</ul>
		</nav>
	)
}
