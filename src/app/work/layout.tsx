import { PropsWithChildren } from 'react'

import { SidebarListItem } from '@/features/navigation/components/sidebar-list-item'
import { WorkBreadcrumb } from '@/features/work/components/work-breadcrumb'
import { workMenu } from '@/features/work/utils/work-menu'

export default function SketchLayout({ children }: PropsWithChildren) {
	return (
		<div className="px-6 xl:container">
			<div className="pt-4 md:hidden">
				<WorkBreadcrumb menu={workMenu} />
			</div>

			<div className="flex items-start">
				<div className="hidden w-56 flex-shrink-0 pt-8 md:block lg:w-64">
					{workMenu.map((menuItem) => (
						<ul
							className="flex flex-col"
							aria-describedby={menuItem.label}
							key={menuItem.path}
						>
							<SidebarListItem key={menuItem.path} item={menuItem} />
						</ul>
					))}
				</div>

				<main id="main" className="flex-1 pt-4 md:px-4 md:pt-8">
					{children}
				</main>
			</div>
		</div>
	)
}
