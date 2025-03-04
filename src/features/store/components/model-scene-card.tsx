'use client'

import dynamic from 'next/dynamic'

import { Expand } from 'lucide-react'

import { Button } from '@/components/ui/button'

const ModelViewer = dynamic(
	() =>
		import('@/features/store/components/model-viewer').then(
			(mod) => mod.ModelViewer
		),
	{
		ssr: false,
	}
)

export function ModelSceneCard() {
	return (
		<div className="relative aspect-video w-full border">
			<ModelViewer />

			<Button
				variant="outline"
				size="icon"
				className="absolute bottom-2 right-2 bg-background/50 backdrop-blur-sm"
			>
				<Expand className="h-4 w-4" />
			</Button>
		</div>
	)
}
