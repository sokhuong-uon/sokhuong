import { ReactNode } from 'react'

import { Box, Circle, Cylinder, Torus } from 'lucide-react'
import * as THREE from 'three'

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

export const basicMeshes: {
	name: BasicMesh
	icon?: ReactNode
	createMesh: () => THREE.Mesh
}[] = [
	{
		name: 'Box',
		icon: <Box />,
		createMesh: createBox,
	},
	{
		name: 'Capsule',
		createMesh: createCapsule,
	},
	{
		name: 'Circle',
		icon: <Circle />,
		createMesh: createCircle,
	},
	{
		name: 'Cylinder',
		icon: <Cylinder />,
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
		icon: <Torus />,
		createMesh: createTorus,
	},
	{
		name: 'TorusKnot',
		createMesh: createTorusKnot,
	},
]
