'use client'

import { useEffect, useRef, useState } from 'react'

import {
	GizmoHelper,
	GizmoViewport,
	OrbitControls,
	TransformControls,
} from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup,
} from '@/components/ui/resizable'
import { ThreeEditorNavbar } from '@/features/three-editor/components/three-editor-navbar'
import { useThreeEditorStore } from '@/features/three-editor/store/three-editor-store'

export default function ThreeEditor() {
	const scene = useThreeEditorStore((state) => state.scene)
	const selectedObject = useThreeEditorStore((state) => state.selectedObject)
	const editorRef = useRef<HTMLDivElement>(null)
	const [portalContainer, setPortalContainer] = useState<HTMLElement | null>(
		null
	)

	useEffect(() => {
		// Create a portal container div
		const container = document.createElement('div')
		container.id = 'editor-portal-container'
		container.style.position = 'absolute'
		container.style.top = '0'
		container.style.left = '0'
		container.style.width = '100%'
		container.style.height = '100%'
		container.style.pointerEvents = 'none'
		container.style.zIndex = '9999'

		// Add it to the editor container
		if (editorRef.current) {
			editorRef.current.appendChild(container)
			setPortalContainer(container)
		}

		return () => {
			// Cleanup
			if (container && container.parentNode) {
				container.parentNode.removeChild(container)
			}
		}
	}, [])

	return (
		<div
			ref={editorRef}
			className="relative flex h-[calc(100vh-10rem)] w-full flex-col border border-muted"
		>
			<ThreeEditorNavbar
				editorRef={editorRef}
				portalContainer={portalContainer}
			/>

			<ResizablePanelGroup direction="horizontal" className="h-full w-full">
				<ResizablePanel className="flex-1" defaultSize={85}>
					<Canvas
						frameloop="demand"
						scene={scene}
						camera={{ position: [0, 3, 5] }}
					>
						<gridHelper />
						{selectedObject && (
							<TransformControls object={selectedObject} mode="translate" />
						)}
						<OrbitControls makeDefault />
						<GizmoHelper alignment="bottom-right" margin={[80, 80]}>
							<GizmoViewport
								axisColors={['#9d4b4b', '#2f7f4f', '#3b5b9d']}
								labelColor="white"
							/>
						</GizmoHelper>
					</Canvas>
				</ResizablePanel>

				<ResizableHandle />

				<ResizablePanel
					defaultSize={15}
					minSize={10}
					maxSize={20}
					className="w-[1rem]"
				>
					Properties
				</ResizablePanel>
			</ResizablePanelGroup>
		</div>
	)
}
