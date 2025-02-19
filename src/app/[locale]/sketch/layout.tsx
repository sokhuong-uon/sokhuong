import { PropsWithChildren } from 'react'

import { Sidebar } from '@/features/navigation/components/sidebar'
import { SketchDrawerBreadcrumb } from '@/features/sketch/components/sketch-drawer-breadcrumb'
import { Menu } from '@/features/sketch/types/sketch-menu'

const menu = [
	{
		label: 'Form',
		path: '/sketch/form',
		items: [
			{
				label: 'Multi-step',
				path: '/sketch/form/multi-step',
				badge: 'New',
			},
			{
				label: 'Multi-page',
				path: '/sketch/form/multi-page',
			},
		],
	},
] satisfies Menu[]

export default function SketchLayout({ children }: PropsWithChildren) {
	return (
		<div className="px-6 xl:container">
			<div className="pt-4 md:hidden">
				<SketchDrawerBreadcrumb menu={menu} />
			</div>

			<div className="flex items-start">
				<div className="hidden w-56 flex-shrink-0 pt-8 md:block lg:w-64">
					<Sidebar menu={menu} />
				</div>

				<main id="main" className="flex-1 pt-4 md:px-4 md:pt-8">
					{children}
				</main>
			</div>
		</div>
	)
}
