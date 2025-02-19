import Link from 'next/link'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Menu, MenuItem } from '@/features/sketch/types/sketch-menu'

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

function SidebarListItem({ item }: { item: MenuItem }) {
	return (
		<li key={item.path}>
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
		</li>
	)
}
