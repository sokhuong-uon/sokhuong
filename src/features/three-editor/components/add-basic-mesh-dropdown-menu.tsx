'use client'

import * as THREE from 'three'

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
import { useThreeEditorStore } from '@/features/three-editor/store/three-editor-store'
import { BasicMesh } from '@/features/three-editor/types/basic-mesh'
import {
	createBox,
	createCapsule,
	createCircle,
	createCylinder,
	createDodecahedron,
	createIcosahedron,
	createLathe,
	createOctahedron,
	createPlane,
	createRing,
	createSphere,
	createTetrahedron,
	createTorus,
	createTorusKnot,
	createTube,
} from '@/features/three-editor/utils/create-basic-mesh'

export function AddBasicMeshDropdownMenu() {
	const addObject = useThreeEditorStore((state) => state.addObject)
	const sceneChildrens = useThreeEditorStore((state) => state.scene.children)

	const meshMenu: { name: BasicMesh; createMesh: () => THREE.Mesh }[] = [
		{
			name: 'Box',
			createMesh: createBox,
		},
		{
			name: 'Capsule',
			createMesh: createCapsule,
		},
		{
			name: 'Circle',
			createMesh: createCircle,
		},
		{
			name: 'Cylinder',
			createMesh: createCylinder,
		},
		{
			name: 'Dodecahedron',
			createMesh: createDodecahedron,
		},
		{
			name: 'Tetrahedron',
			createMesh: createTetrahedron,
		},
		{
			name: 'Icosahedron',
			createMesh: createIcosahedron,
		},
		{
			name: 'Octahedron',
			createMesh: createOctahedron,
		},
		{
			name: 'Tube',
			createMesh: createTube,
		},
		{
			name: 'Plane',
			createMesh: createPlane,
		},
		{
			name: 'Ring',
			createMesh: createRing,
		},
		{
			name: 'UV Sphere',
			createMesh: createSphere,
		},
		{
			name: 'Ico Sphere',
			createMesh: createIcosahedron,
		},
		{
			name: 'Lathe',
			createMesh: createLathe,
		},
		{
			name: 'Torus',
			createMesh: createTorus,
		},
		{
			name: 'TorusKnot',
			createMesh: createTorusKnot,
		},
	]

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
							{meshMenu.map((meshMenuItem) => (
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
