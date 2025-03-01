'use client'

import { Dispatch, SetStateAction } from 'react'

import { ChevronRight } from 'lucide-react'

import {
	CommandDialog,
	CommandEmpty,
	CommandInput,
	CommandItem,
	CommandList,
} from '@/components/ui/command'
import { DialogTitle } from '@/components/ui/dialog'
import { basicMeshes } from '@/features/three-editor/components/basic-meshes'
import { useThreeEditorStore } from '@/features/three-editor/store/three-editor-store'

export function SearchEditorCommand({
	isOpen,
	setIsOpen,
}: {
	isOpen: boolean
	setIsOpen: Dispatch<SetStateAction<boolean>>
}) {
	const addObject = useThreeEditorStore((state) => state.addObject)

	return (
		<CommandDialog open={isOpen} onOpenChange={setIsOpen}>
			<DialogTitle className="sr-only">Editor commands</DialogTitle>

			<CommandInput placeholder="Type a command or search..." />

			<CommandList>
				<CommandEmpty>No results found.</CommandEmpty>

				{basicMeshes.map((mesh) => (
					<CommandItem
						key={mesh.name}
						onSelect={() => {
							setIsOpen(false)
							addObject(mesh.createMesh())
						}}
					>
						<div className="flex px-1">
							<p className="flex text-muted-foreground">
								<span>Add (Shift A)</span>
								<ChevronRight className="scale-50" />
								<span>Mesh</span>
								<ChevronRight className="scale-50" />
							</p>

							{mesh.icon}
							<span>{mesh.name}</span>
						</div>
					</CommandItem>
				))}
			</CommandList>
		</CommandDialog>
	)
}
