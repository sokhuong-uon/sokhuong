'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Slash } from 'lucide-react'

import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { WorkBreadcrumbDrawer } from '@/features/work/components/work-breadcrumb-drawer'
import { WorkMenu } from '@/features/work/types/work-menu'

export function WorkBreadcrumb({ menu }: { menu: WorkMenu[] }) {
	const pathname = usePathname()

	const activeMainMenu = menu.filter((mainMenuItem) =>
		pathname.startsWith(mainMenuItem.path)
	)

	return (
		<Breadcrumb>
			<BreadcrumbList className="max-w-full flex-nowrap">
				{pathname === '/work' && (
					<BreadcrumbItem className="whitespace-nowrap">
						<WorkBreadcrumbDrawer label={'Work'} menu={menu} />
					</BreadcrumbItem>
				)}

				{pathname !== '/work' && (
					<>
						<BreadcrumbItem>
							<Link href={'/work'}>Work</Link>
						</BreadcrumbItem>

						<BreadcrumbSeparator>
							<Slash />
						</BreadcrumbSeparator>

						{activeMainMenu && (
							<BreadcrumbItem className="truncate">
								<BreadcrumbPage className="truncate">
									<WorkBreadcrumbDrawer
										label={
											activeMainMenu.filter((item) =>
												pathname.startsWith(item.path)
											)[0]?.label
										}
										menu={menu}
									/>
								</BreadcrumbPage>
							</BreadcrumbItem>
						)}
					</>
				)}
			</BreadcrumbList>
		</Breadcrumb>
	)
}
