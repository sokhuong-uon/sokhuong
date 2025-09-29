import { PropsWithChildren } from 'react'

import { Sidebar } from '@/features/navigation/components/sidebar'
import { SketchBreadcrumb } from '@/features/sketch/components/sketch-breadcrumb'

import { menu } from './sketch-menu'

export default function SketchLayout({ children }: PropsWithChildren) {
	return (
		<div className="px-6 xl:container">
			<div className="pt-4 md:hidden">
				<SketchBreadcrumb menu={menu} />
			</div>

			<div className="flex items-start">
				<div className="hidden w-56 flex-shrink-0 pt-8 md:block lg:w-64">
					<Sidebar menu={menu} />
				</div>

				<main id="main" className="max-w-full flex-1 pt-4 md:px-4 md:pt-8">
					{children}
				</main>
			</div>
		</div>
	)
}
