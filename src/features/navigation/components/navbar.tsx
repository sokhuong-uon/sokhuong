'use client'

import Image from 'next/image'
import Link from 'next/link'
import * as React from 'react'

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
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { ThemeModeSwitcher } from '@/features/theme/components/theme-mode-switcher'

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
			description: 'Visit my 3D model store',
		},
		{
			label: 'Sketch',
			path: '/sketch',
			description:
				'Building block that I built to learn or showcase technologies',
		},
	]

	return (
		<NavigationMenu className="w-full min-w-full justify-start py-3">
			<NavigationMenuList className="flex w-full justify-between">
				<NavigationMenuItem>
					<NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
						<Link href="/">Home</Link>
					</NavigationMenuLink>
				</NavigationMenuItem>
				<NavigationMenuItem className="hidden md:block">
					<NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
						<Link href="/work">Works</Link>
					</NavigationMenuLink>
				</NavigationMenuItem>
				<NavigationMenuItem className="hidden md:block">
					<NavigationMenuTrigger>Sketches</NavigationMenuTrigger>
					<NavigationMenuContent className="h-80 w-full">
						<ul className="grid h-full grid-cols-3 gap-2">
							<li className="row-span-5">
								<NavigationMenuLink asChild>
									<Link
										className="bg-linear-to-b outline-hidden flex h-full w-full select-none flex-col justify-end rounded-md from-muted/50 to-muted p-6 no-underline focus:shadow-md"
										href="/sketch/3d-graphic/laptop-model"
									>
										<Image
											src="/images/laptop-model-photo.png"
											alt="Laptop Model"
											width={160}
											height={160}
											className="rounded-md"
										/>
										<div className="mb-2 mt-4 text-lg font-medium">
											Laptop Model
										</div>
										<p className="text-sm leading-tight text-muted-foreground">
											Designed in Blender, port to the web with R3F.
										</p>
									</Link>
								</NavigationMenuLink>
							</li>
							<ListItem href="/sketch/form/multi-step" title="Multi-step form">
								Built with React-hook-form, Zod, and Framer Motion.
							</ListItem>
							<ListItem href="/sketch/form/multi-page" title="Multi-page form">
								Built with React-hook-form, Zod, and Framer Motion.
							</ListItem>
							<ListItem href="/sketch/editor/tiptap" title="Tiptap Editor">
								Built with Tiptap, React, and Tailwind CSS.
							</ListItem>
							<ListItem href="/sketch/editor/3d" title="3D Editor">
								Built with React-three-fiber, Tailwind CSS, and Zustand.
							</ListItem>
							<ListItem
								href="/sketch/3d-graphic/panorama-to-cubemap"
								title="Panorama to Cubemap"
							>
								Built with React-three-fiber and Tailwind CSS.
							</ListItem>
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
			</NavigationMenuList>
			<ThemeModeSwitcher className="ml-auto hidden md:block" />
			<Drawer>
				<DrawerTrigger className="ml-auto flex p-2 md:hidden">
					<Menu aria-label="Toggle menu" />
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
		</NavigationMenu>
	)
}

function ListItem({
	title,
	children,
	href,
	...props
}: React.ComponentPropsWithoutRef<'li'> & { href: string }) {
	return (
		<li {...props}>
			<NavigationMenuLink asChild>
				<Link href={href}>
					<div className="text-sm font-medium leading-none">{title}</div>
					<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
						{children}
					</p>
				</Link>
			</NavigationMenuLink>
		</li>
	)
}
