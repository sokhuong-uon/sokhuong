'use client'

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

	return (
		<div className="relative flex h-[calc(100vh-10rem)] flex-col border border-muted">
			<ThreeEditorNavbar />

			<ResizablePanelGroup direction="horizontal" className="flex flex-1">
				<ResizablePanel className="flex-1" defaultSize={100}>
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

				<ResizablePanel minSize={20} maxSize={30} className="w-5">
					Properties
				</ResizablePanel>
			</ResizablePanelGroup>
		</div>
	)
}
