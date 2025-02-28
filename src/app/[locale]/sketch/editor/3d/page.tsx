'use client'

import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup,
} from '@/components/ui/resizable'

import { ThreeEditorNavbar } from './components/three-editor-navbar'

export default function ThreeJSEditor() {
	return (
		<div className="relative flex h-96 flex-col border border-muted">
			<ThreeEditorNavbar />

			<ResizablePanelGroup direction="horizontal" className="flex flex-1">
				<ResizablePanel className="flex-1">
					<Canvas frameloop="demand">
						<mesh>
							<boxGeometry />
							<meshBasicMaterial />
						</mesh>
						<OrbitControls makeDefault />
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
