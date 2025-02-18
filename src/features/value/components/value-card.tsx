import { PropsWithChildren } from 'react'

import { Card, CardContent, CardHeader } from '@/components/ui/card'

type ValueCardProps = PropsWithChildren<{
	title: string
	description: string
}>

export function ValueCard({ title, description, children }: ValueCardProps) {
	return (
		<Card className="h-72 w-full md:h-96">
			<CardHeader>
				<h2 className="text-xl font-medium">{title}</h2>
				<p className="text-muted-foreground">{description}</p>
			</CardHeader>
			<CardContent>{children}</CardContent>
		</Card>
	)
}
