'use client'

import { usePathname } from 'next/navigation'

import { Slash } from 'lucide-react'

import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { BreadcrumbDrawer } from '@/features/sketch/components/sketch-breadcrumb-drawer'
import { Menu } from '@/features/sketch/types/sketch-menu'

export function SketchBreadcrumb({ menu }: { menu: Menu[] }) {
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
