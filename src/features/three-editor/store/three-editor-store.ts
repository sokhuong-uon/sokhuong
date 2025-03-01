import * as THREE from 'three'
import { temporal } from 'zundo'
import { create } from 'zustand'

type ThreeEditorStore = {
	scene: THREE.Scene
	geometries: Record<string, never>
	materials: Record<string, never>

	selectedObject?: THREE.Object3D
	setSelectedObject: (object?: THREE.Object3D) => void
	addObject: (
		object: THREE.Object3D,
		parent?: THREE.Object3D,
		index?: number
	) => void
	removeObject: (object: THREE.Object3D) => void
}

export const useThreeEditorStore = create<ThreeEditorStore>()(
	temporal((set) => ({
		scene: new THREE.Scene(),
		geometries: {},
		materials: {},

		selectedObject: undefined,

		setSelectedObject: (object) => set({ selectedObject: object }),

		addObject: (object, parent, index) =>
			set((state) => {
				if (!parent) {
					state.scene.add(object)
				} else if (index !== undefined) {
					parent.children.splice(index, 0, object)
					object.parent = parent
				}
				state.selectedObject = object

				return { ...state }
			}),

		removeObject: (object) =>
			set((state) => {
				state.scene.remove(object)
				return { ...state }
			}),
	}))
)
