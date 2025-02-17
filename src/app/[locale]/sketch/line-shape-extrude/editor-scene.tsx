'use client'

import { useContext } from 'react'

import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

import { ViewModeContext } from './editor-context'
import { WheelShape } from './sheel-shape'

export function EditorScene() {
	const { viewMode } = useContext(ViewModeContext)
	return (
		<Canvas className="relative aspect-video w-full bg-zinc-900">
			<WheelShape mode={viewMode} />
			<OrbitControls />
		</Canvas>
	)
}
