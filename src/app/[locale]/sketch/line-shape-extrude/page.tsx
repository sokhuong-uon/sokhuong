import Editor from './editor'
import { EditorScene } from './editor-scene'
import { ToggleViewMode } from './toggle-view-mode'

export default function ShapeEditor() {
	return (
		<div className="relative flex w-full">
			<Editor>
				<ToggleViewMode />
				<EditorScene />
			</Editor>
		</div>
	)
}
