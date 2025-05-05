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
