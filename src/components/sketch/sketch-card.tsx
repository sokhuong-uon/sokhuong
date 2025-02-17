import { PropsWithChildren } from 'react'

import { Card, CardContent, CardHeader } from '../ui/card'

type SketchCardProps = PropsWithChildren<{
	title: string
	description?: string
}>

export function SketchCard({ title, description, children }: SketchCardProps) {
	return (
		<Card className="h-64 w-full md:h-80">
			<CardHeader>
				<h2 id="sketch-title" className="text-xl">
					{title}
				</h2>
				{description && (
					<p className="text-neutral-400 contrast-more:text-neutral-300">
						{description}
					</p>
				)}
			</CardHeader>
			<CardContent>{children}</CardContent>
		</Card>
	)
}
