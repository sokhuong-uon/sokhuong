'use client'

import Link from 'next/link'

import { ChevronDown } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
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
import { WorkMenu } from '@/features/work/types/work-menu'

export function WorkBreadcrumbDrawer({
	label,
	menu,
}: {
	label: string
	menu: WorkMenu[]
}) {
	return (
		<Drawer>
			<DrawerTrigger className="flex items-center gap-2">
				{label}
				<ChevronDown className="h-4 w-4" />
				<span className="sr-only">Toggle menu</span>
			</DrawerTrigger>

			<DrawerContent>
				<DrawerHeader>
					<DrawerTitle>Work Experience Menu</DrawerTitle>
					<DrawerDescription className="sr-only">
						See my work at each companies/places.
					</DrawerDescription>
				</DrawerHeader>

				<nav className="max-h-[calc(100dvh-20rem)] overflow-y-auto">
					<ul className="flex flex-col">
						{menu.map((item) => (
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
