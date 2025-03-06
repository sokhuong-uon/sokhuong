'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { ChevronDown, Slash } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from '@/components/ui/drawer'
import { Menu } from '@/features/sketch/types/sketch-menu'

export function SketchDrawerBreadcrumb({ menu }: { menu: Menu[] }) {
	const pathname = usePathname()

	const activeMainMenu = menu.filter((mainMenuItem) =>
		pathname.startsWith(mainMenuItem.path)
	)[0]

	return (
		<Breadcrumb className="">
			<BreadcrumbList className="max-w-full flex-nowrap">
				{pathname === '/sketch' && (
					<>
						<BreadcrumbItem className="whitespace-nowrap">
							<BreadcrumbDrawer label={'Sketch'} menu={menu} />
						</BreadcrumbItem>
					</>
				)}

				{pathname !== '/sketch' && (
					<>
						<BreadcrumbItem>Sketch</BreadcrumbItem>

						<BreadcrumbSeparator>
							<Slash />
						</BreadcrumbSeparator>

						{activeMainMenu && (
							<>
								<BreadcrumbItem className="whitespace-nowrap">
									<BreadcrumbDrawer label={activeMainMenu.label} menu={menu} />
								</BreadcrumbItem>

								<BreadcrumbSeparator>
									<Slash />
								</BreadcrumbSeparator>

								<BreadcrumbItem className="truncate">
									<BreadcrumbPage className="truncate">
										{
											activeMainMenu.items.filter((item) =>
												pathname.startsWith(item.path)
											)[0]?.label
										}
									</BreadcrumbPage>
								</BreadcrumbItem>
							</>
						)}
					</>
				)}
			</BreadcrumbList>
		</Breadcrumb>
	)
}

function BreadcrumbDrawer({ label, menu }: { label: string; menu: Menu[] }) {
	return (
		<Drawer>
			<DrawerTrigger className="flex items-center gap-2">
				{label}
				<ChevronDown className="h-4 w-4" />
				<span className="sr-only">Toggle menu</span>
			</DrawerTrigger>

			<DrawerContent>
				<DrawerHeader>
					<DrawerTitle>Sketch navigation menu</DrawerTitle>
					<DrawerDescription className="sr-only">
						Nivigate to different sketch pages.
					</DrawerDescription>
				</DrawerHeader>

				<nav className="max-h-[calc(100dvh-20rem)] overflow-y-auto">
					<ul className="flex flex-col gap-6">
						{menu.map((menuItem) => (
							<li key={menuItem.label} className="flex flex-col gap-2">
								<h4 className="pl-4 font-bold">{menuItem.label}</h4>

								<ul className="flex flex-col" aria-describedby={menuItem.label}>
									{menuItem.items.map((item) => (
										<li key={item.path}>
											<DrawerClose className="w-full" asChild>
												<Button
													asChild
													variant={'ghost'}
													className="w-full justify-start text-muted-foreground"
												>
													<Link href={item.path} className="flex gap-2">
														<span className="truncate" title={item.label}>
															{item.label}
														</span>
														{item.badge && <Badge>{item.badge}</Badge>}
													</Link>
												</Button>
											</DrawerClose>
										</li>
									))}
								</ul>
							</li>
						))}
					</ul>
				</nav>

				<DrawerFooter>
					<DrawerClose>
						<Button variant="outline" className="w-full">
							Close
						</Button>
					</DrawerClose>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	)
}
