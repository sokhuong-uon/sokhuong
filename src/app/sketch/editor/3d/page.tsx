'use client'

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
	return (
		<div className="relative flex h-96 flex-col border border-muted sm:h-[40rem]">
			<ThreeEditorNavbar />

			<ResizablePanelGroup direction="horizontal" className="h-full w-full">
				<ResizablePanel className="flex-1" defaultSize={85}>
					<Canvas
						frameloop="demand"
						scene={scene}
						camera={{ position: [0, 3, 5] }}
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
