'use client'

import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useThreeEditorStore } from '@/features/three-editor/store/three-editor-store'

export function EditDropdownMenu() {
	const { undo, redo } = useThreeEditorStore.temporal.getState()

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button size="sm" variant="ghost">
					Edit
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuItem
					disabled
					onClick={() => {
						undo()
					}}
				>
					<span>Undo</span>
					<DropdownMenuShortcut>⌘Z</DropdownMenuShortcut>
				</DropdownMenuItem>
				<DropdownMenuItem
					disabled
					onClick={() => {
						redo()
					}}
				>
					<span>Redo</span>
					<DropdownMenuShortcut>⇧⌘Z</DropdownMenuShortcut>
				</DropdownMenuItem>

				<DropdownMenuSeparator />
				<DropdownMenuItem disabled>Center</DropdownMenuItem>
				<DropdownMenuItem disabled>Clone</DropdownMenuItem>
				<DropdownMenuItem disabled>
					<span>Delete</span>
					<DropdownMenuShortcut>Del</DropdownMenuShortcut>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
