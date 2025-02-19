import Link from 'next/link'

import { Button } from '@/components/ui/button'

type Menu = {
	label: string
	items: { label: string; path: string; badge?: string }[]
}

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

						<ul className="flex flex-col gap-2">
							{menuItem.items.map((subItem) => (
								<li key={subItem.path}>
									<Button
										asChild
										variant={'ghost'}
										className="w-full justify-start text-muted-foreground"
									>
										<Link href={subItem.path}>{subItem.label}</Link>
									</Button>
								</li>
							))}
						</ul>
					</li>
				))}
			</ul>
		</nav>
	)
}
