'use client'

import { Dispatch, SetStateAction } from 'react'

import { Box, ChevronRight, Circle, Cone, Cylinder, Torus } from 'lucide-react'

import {
	CommandDialog,
	CommandEmpty,
	CommandInput,
	CommandItem,
	CommandList,
} from '@/components/ui/command'
import { DialogTitle } from '@/components/ui/dialog'

export function SearchEditorCommand({
	isOpen,
	setIsOpen,
}: {
	isOpen: boolean
	setIsOpen: Dispatch<SetStateAction<boolean>>
}) {
	return (
		<CommandDialog open={isOpen} onOpenChange={setIsOpen}>
			<DialogTitle className="sr-only">Editor commands</DialogTitle>

			<CommandInput placeholder="Type a command or search..." />

			<CommandList>
				<CommandEmpty>No results found.</CommandEmpty>

				<CommandItem>
					<p className="flex text-muted-foreground">
						<span>Add (Shift A)</span>
						<ChevronRight className="scale-50" />
						<span>Mesh</span>
						<ChevronRight className="scale-50" />
					</p>

					<Box />
					<span>Cube</span>
				</CommandItem>
				<CommandItem>
					<p className="flex text-muted-foreground">
						<span>Add (Shift A)</span>
						<ChevronRight className="scale-50" />
						<span>Mesh</span>
						<ChevronRight className="scale-50" />
					</p>

					<Cone />
					<span>Cone</span>
				</CommandItem>
				<CommandItem>
					<p className="flex text-muted-foreground">
						<span>Add (Shift A)</span>
						<ChevronRight className="scale-50" />
						<span>Mesh</span>
						<ChevronRight className="scale-50" />
					</p>

					<Cylinder />
					<span>Cylinder</span>
				</CommandItem>
				<CommandItem>
					<p className="flex text-muted-foreground">
						<span>Add (Shift A)</span>
						<ChevronRight className="scale-50" />
						<span>Mesh</span>
						<ChevronRight className="scale-50" />
					</p>

					<Torus />
					<span>Torus</span>
				</CommandItem>
				<CommandItem>
					<p className="flex text-muted-foreground">
						<span>Add (Shift A)</span>
						<ChevronRight className="scale-50" />
						<span>Mesh</span>
						<ChevronRight className="scale-50" />
					</p>

					<Circle />
					<span>Circle</span>
				</CommandItem>
			</CommandList>
		</CommandDialog>
	)
}
