import Link from 'next/link'

import { Menu } from 'lucide-react'

import { Github } from '@/components/icon/github'
import { YouTube } from '@/components/icon/youtube'
import { Button } from '@/components/ui/button'
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from '@/components/ui/drawer'

export function Navbar() {
	const homeMenu = {
		label: 'Home',
		path: '/',
		description: 'Back to home page',
	}

	const menu = [
		{
			label: 'Work',
			path: '/work',
			// icon: <ShoppingCart />,
			description: 'Visit my 3D model store',
		},
		{
			label: 'Sketch',
			path: '/sketch',
			// icon: <DraftingCompass />,
			description:
				'Building block that I built to learn or showcase technologies',
		},
		{
			label: 'Store',
			path: '/store',
			// icon: <ShoppingCart />,
			description: 'Visit my 3D model store',
		},
	]

	return (
		<nav className="flex w-full px-4 py-4 uppercase shadow-sm backdrop-blur-md xl:container">
			<ul aria-label="menu" className="flex w-full items-center gap-4">
				<li className="mr-auto">
					<Button
						asChild
						variant={'link'}
						size={'lg'}
						className="px-2 focus-within:underline sm:px-4"
					>
						<Link href={homeMenu.path}>{homeMenu.label}</Link>
					</Button>
				</li>

				{menu.map((item) => (
					<li key={item.path} className="hidden md:flex">
						<Button
							asChild
							variant={'link'}
							size={'lg'}
							className="px-2 focus-within:underline sm:px-4"
						>
							<Link
								prefetch
								href={item.path}
								className="flex items-center justify-center gap-2"
							>
								{item.label}
							</Link>
						</Button>
					</li>
				))}

				<li className="ml-auto flex md:hidden">
					<Drawer>
						<DrawerTrigger className="p-2">
							<Menu />
						</DrawerTrigger>

						<DrawerContent>
							<DrawerHeader>
								<DrawerTitle>Navigation Menu</DrawerTitle>
								<DrawerDescription className="sr-only">
									Navigation Menu for narrow viewport or mobile phone.
								</DrawerDescription>
							</DrawerHeader>

							<ul className="max-h-[32rem] space-y-4 overflow-y-auto p-4">
								{[homeMenu, ...menu].map((item) => (
									<li key={item.path} className="flex h-24 gap-2">
										<Link prefetch href={item.path} className="h-full w-full">
											<DrawerClose asChild className="flex h-full w-full gap-2">
												<div>
													<div className="aspect-video h-full bg-muted"></div>
													<div className="flex flex-col items-start">
														<p className="underline">{item.label}</p>
														<p className="line-clamp-3 text-start text-muted-foreground">
															{item.description}
														</p>
													</div>
												</div>
											</DrawerClose>
										</Link>
									</li>
								))}

								<li>
									<ul
										aria-label="Social media and other external links"
										className="flex items-center justify-center gap-2"
									>
										<li>
											<Button
												size="icon"
												className="text-current"
												variant="ghost"
												asChild
											>
												<Link
													href="https://github.com/sokhuong-uon"
													target="_blank"
												>
													<Github className="scale-50" />
												</Link>
											</Button>
										</li>
										<li>
											<Button
												size="icon"
												className="text-current"
												variant="ghost"
												asChild
											>
												<Link
													href="https://www.youtube.com/@alotofcode"
													target="_blank"
												>
													<YouTube className="scale-50" />
												</Link>
											</Button>
										</li>
									</ul>
								</li>
							</ul>
						</DrawerContent>
					</Drawer>
				</li>
			</ul>
		</nav>
	)
}
