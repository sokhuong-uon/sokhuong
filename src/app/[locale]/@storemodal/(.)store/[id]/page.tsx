'use client'

import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog'
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
} from '@/components/ui/drawer'
import { ModelDetail } from '@/features/store/components/model-detail'
import { ModelSceneCard } from '@/features/store/components/model-scene-card'
import { useMediaQuery } from '@/hooks/use-media-query'

export default function ProductDetail() {
	const router = useRouter()

	const isDesktop = useMediaQuery('(min-width: 768px)')

	if (isDesktop) {
		return (
			<Dialog open={true} onOpenChange={() => router.back()}>
				<DialogContent className="max-h-[calc(100dvh-5rem)] min-w-[calc(100dvw-10rem)] overflow-y-auto">
					<DialogHeader className="sr-only">
						<DialogTitle>Model detail</DialogTitle>
						<DialogDescription>
							View detail information of the model and choose what to download.
						</DialogDescription>
					</DialogHeader>
					<div className="flex flex-col p-4 2xl:flex-row">
						<div className="flex-1">
							<ModelSceneCard />
						</div>
						<div className="2xl:w-96">
							<ModelDetail />
						</div>
					</div>
				</DialogContent>
			</Dialog>
		)
	}

	return (
		<Drawer open={true} onOpenChange={() => router.back()}>
			<DrawerContent>
				<DrawerHeader className="sr-only">
					<DrawerTitle>Model detail</DrawerTitle>
					<DrawerDescription>
						View detail information of the model and choose what to download.
					</DrawerDescription>
				</DrawerHeader>
				<div className="max-h-[calc(100dvh-10rem)] overflow-y-auto p-4">
					<ModelSceneCard />
					<ModelDetail />
				</div>
				<DrawerFooter className="pt-2">
					<DrawerClose asChild>
						<Button variant="outline">Close</Button>
					</DrawerClose>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	)
}
