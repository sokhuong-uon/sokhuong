import { PropsWithChildren } from 'react'

import { Sidebar } from '@/features/navigation/components/sidebar'

const menu = [
	{
		label: 'Form',
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
]

export default function SketchLayout({ children }: PropsWithChildren) {
	return (
		<div className="flex items-start px-6 xl:container">
			<div className="hidden w-56 flex-shrink-0 pt-8 md:block lg:w-64">
				<Sidebar menu={menu} />
			</div>

			<main id="main" className="flex-1 pt-8 md:px-4">
				{children}
			</main>
		</div>
	)
}
