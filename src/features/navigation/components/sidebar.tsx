'use client'

import { SidebarListItem } from '@/features/navigation/components/sidebar-list-item'
import { Menu } from '@/features/sketch/types/sketch-menu'

type SidebarProps = {
	menu: Menu[]
}

export function Sidebar({ menu }: SidebarProps) {
	return (
		<nav className="flex flex-col gap-6">
			<ul>
				{menu.map((menuItem) => (
					<li key={menuItem.label} className="flex flex-col gap-2">
						<h4 className="pl-4 font-bold">{menuItem.label}</h4>

						<ul
							className="flex flex-col gap-2"
							aria-describedby={menuItem.label}
						>
							{menuItem.items.map((item) => (
								<SidebarListItem key={item.path} item={item} />
							))}
						</ul>
					</li>
				))}
			</ul>
		</nav>
	)
}
