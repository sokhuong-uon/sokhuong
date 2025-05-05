import { ComponentProps } from 'react'

import { cn } from '@/lib/utils'

export function TechnologyList({
	technologies,
	className,
}: ComponentProps<'ul'> & {
	technologies: JSX.Element[]
}) {
	return (
		<ul className={cn('grid grid-cols-2 gap-3', className)}>
			{technologies.map((tech) => (
				<li
					key={tech.key}
					className="flex aspect-video w-full items-center justify-center bg-muted/50"
				>
					{tech}
				</li>
			))}
		</ul>
	)
}
