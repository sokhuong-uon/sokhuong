import { PropsWithChildren } from 'react'

import { Card, CardContent, CardHeader } from '../ui/card'

type ValueCardProps = PropsWithChildren<{
	title: string
	description: string
}>

export function ValueCard({ title, description, children }: ValueCardProps) {
	return (
		<Card className="h-64 w-full md:h-80">
			<CardHeader>
				<h2 className="text-xl font-medium">{title}</h2>
				<p className="text-muted-foreground">{description}</p>
			</CardHeader>
			<CardContent>{children}</CardContent>
		</Card>
	)
}
