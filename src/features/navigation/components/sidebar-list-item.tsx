import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { MenuItem } from '@/features/sketch/types/sketch-menu'
import { cn } from '@/lib/utils'

export function SidebarListItem({ item }: { item: MenuItem }) {
	const pathname = usePathname()

	return (
		<li key={item.path}>
			<Button
				asChild
				variant={'ghost'}
				className={'w-full justify-start text-muted-foreground'}
			>
				<Link prefetch href={item.path} className="flex gap-2">
					<span
						className={cn(
							'truncate',
							pathname.startsWith(item.path) && 'underline'
						)}
						title={item.label}
					>
						{item.label}
					</span>

					{item.badge && <Badge>{item.badge}</Badge>}
				</Link>
			</Button>
		</li>
	)
}
