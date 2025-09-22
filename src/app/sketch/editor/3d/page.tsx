'use client'

import { Suspense, useEffect, useRef, useState } from 'react'

import {
	Environment,
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

export default function ThreeJSEditor() {
	const scene = useThreeEditorStore((state) => state.scene)
	const selectedObject = useThreeEditorStore((state) => state.selectedObject)
	const [error, setError] = useState<string | null>(null)
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

	const handleCanvasError = (error: Error) => {
		console.error('Canvas error:', error)
		setError(error.message)
	}

	if (error) {
		return (
			<div
				ref={editorRef}
				className="relative flex h-96 flex-col border border-muted sm:h-[40rem]"
			>
				<ThreeEditorNavbar
					editorRef={editorRef}
					portalContainer={portalContainer}
				/>
				<div className="flex flex-1 items-center justify-center">
					<div className="text-center">
						<div className="mb-2 text-red-500">WebGL Error</div>
						<div className="mb-4 text-sm text-muted-foreground">{error}</div>
						<button
							onClick={() => setError(null)}
							className="rounded bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90"
						>
							Retry
						</button>
					</div>
				</div>
			</div>
		)
	}

	return (
		<div
			ref={editorRef}
			className="relative flex h-96 flex-col border border-muted sm:h-[40rem]"
		>
			<ThreeEditorNavbar
				editorRef={editorRef}
				portalContainer={portalContainer}
			/>

			<ResizablePanelGroup direction="horizontal" className="h-full w-full">
				<ResizablePanel className="flex-1" defaultSize={85}>
					<Suspense
						fallback={
							<div className="flex h-full items-center justify-center">
								Loading...
							</div>
						}
					>
						<Canvas
							frameloop="demand"
							scene={scene}
							camera={{ position: [0, 3, 5] }}
							onError={(event) =>
								handleCanvasError(event.nativeEvent as unknown as Error)
							}
							gl={{
								antialias: true,
								alpha: false,
								powerPreference: 'high-performance',
							}}
						>
							<hemisphereLight
								args={['#87CEEB', '#FFE4B5', 0.6]} // Sky blue to warm sun color
								intensity={0.4}
							/>
							<directionalLight
								position={[10, 10, 5]}
								intensity={1}
								castShadow
								shadow-mapSize={[2048, 2048]}
								shadow-camera-far={50}
								shadow-camera-left={-10}
								shadow-camera-right={10}
								shadow-camera-top={10}
								shadow-camera-bottom={-10}
							/>

							<Environment preset="sunset" />

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
					</Suspense>
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
