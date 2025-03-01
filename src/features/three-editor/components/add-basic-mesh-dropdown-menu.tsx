'use client'

import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuPortal,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { basicMeshes } from '@/features/three-editor/components/basic-meshes'
import { useThreeEditorStore } from '@/features/three-editor/store/three-editor-store'

export function AddBasicMeshDropdownMenu() {
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
				<Button size="sm" variant="ghost">
					Add
				</Button>
			</DropdownMenuTrigger>

			<DropdownMenuContent>
				<DropdownMenuItem disabled>Group</DropdownMenuItem>

				<DropdownMenuSub>
					<DropdownMenuSubTrigger>
						<span>Mesh</span>
					</DropdownMenuSubTrigger>
					<DropdownMenuPortal>
						<DropdownMenuSubContent>
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
						</DropdownMenuSubContent>
					</DropdownMenuPortal>
				</DropdownMenuSub>

				<DropdownMenuSub>
					<DropdownMenuSubTrigger>
						<span>Light</span>
					</DropdownMenuSubTrigger>
					<DropdownMenuPortal>
						<DropdownMenuSubContent>
							{lightMenu.map((lightMenuItem) => (
								<DropdownMenuItem disabled key={lightMenuItem.name}>
									<span>{lightMenuItem.name}</span>
								</DropdownMenuItem>
							))}
						</DropdownMenuSubContent>
					</DropdownMenuPortal>
				</DropdownMenuSub>

				<DropdownMenuSub>
					<DropdownMenuSubTrigger>
						<span>Camera</span>
					</DropdownMenuSubTrigger>
					<DropdownMenuPortal>
						<DropdownMenuSubContent>
							<DropdownMenuItem disabled>
								<span>Perspective</span>
							</DropdownMenuItem>
							<DropdownMenuItem disabled>
								<span>Orthographic</span>
							</DropdownMenuItem>
						</DropdownMenuSubContent>
					</DropdownMenuPortal>
				</DropdownMenuSub>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
