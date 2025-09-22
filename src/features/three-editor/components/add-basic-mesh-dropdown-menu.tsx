'use client'

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'

import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuItem,
	DropdownMenuSub,
	DropdownMenuSubTrigger,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { basicMeshes } from '@/features/three-editor/components/basic-meshes'
import { useThreeEditorStore } from '@/features/three-editor/store/three-editor-store'
import { cn } from '@/lib/utils'

export function AddBasicMeshDropdownMenu({
	portalContainer,
}: {
	portalContainer: HTMLElement | null
}) {
	const addObject = useThreeEditorStore((state) => state.addObject)
	const sceneChildrens = useThreeEditorStore((state) => state.scene.children)

	const lightMenu = [
		{
			name: 'Ambient',
		},
		{
			name: 'Directional',
		},
		{
			name: 'Hemisphere',
		},
		{
			name: 'Point',
		},
		{
			name: 'Spot',
		},
	]

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					size="sm"
					variant="ghost"
					className="text-foreground hover:bg-accent hover:text-accent-foreground"
				>
					Add
				</Button>
			</DropdownMenuTrigger>

			<DropdownMenuPrimitive.Portal container={portalContainer}>
				<DropdownMenuPrimitive.Content
					sideOffset={4}
					className={cn(
						'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2'
					)}
				>
					<DropdownMenuItem disabled>Group</DropdownMenuItem>

					<DropdownMenuSub>
						<DropdownMenuSubTrigger>
							<span>Mesh</span>
						</DropdownMenuSubTrigger>
						<DropdownMenuPrimitive.Portal container={portalContainer}>
							<DropdownMenuPrimitive.SubContent
								className={cn(
									'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2'
								)}
							>
								{basicMeshes.map((meshMenuItem) => (
									<DropdownMenuItem
										key={meshMenuItem.name}
										onClick={() => {
											console.log(
												'scene children before add object',
												sceneChildrens
											)
											addObject(meshMenuItem.createMesh())
											console.log(
												'scene children after add object',
												sceneChildrens
											)
										}}
									>
										<span>{meshMenuItem.name}</span>
									</DropdownMenuItem>
								))}
							</DropdownMenuPrimitive.SubContent>
						</DropdownMenuPrimitive.Portal>
					</DropdownMenuSub>

					<DropdownMenuSub>
						<DropdownMenuSubTrigger>
							<span>Light</span>
						</DropdownMenuSubTrigger>
						<DropdownMenuPrimitive.Portal container={portalContainer}>
							<DropdownMenuPrimitive.SubContent
								className={cn(
									'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2'
								)}
							>
								{lightMenu.map((lightMenuItem) => (
									<DropdownMenuItem disabled key={lightMenuItem.name}>
										<span>{lightMenuItem.name}</span>
									</DropdownMenuItem>
								))}
							</DropdownMenuPrimitive.SubContent>
						</DropdownMenuPrimitive.Portal>
					</DropdownMenuSub>

					<DropdownMenuSub>
						<DropdownMenuSubTrigger>
							<span>Camera</span>
						</DropdownMenuSubTrigger>
						<DropdownMenuPrimitive.Portal container={portalContainer}>
							<DropdownMenuPrimitive.SubContent
								className={cn(
									'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2'
								)}
							>
								<DropdownMenuItem disabled>
									<span>Perspective</span>
								</DropdownMenuItem>
								<DropdownMenuItem disabled>
									<span>Orthographic</span>
								</DropdownMenuItem>
							</DropdownMenuPrimitive.SubContent>
						</DropdownMenuPrimitive.Portal>
					</DropdownMenuSub>
				</DropdownMenuPrimitive.Content>
			</DropdownMenuPrimitive.Portal>
		</DropdownMenu>
	)
}
