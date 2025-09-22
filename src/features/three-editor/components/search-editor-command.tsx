'use client'

import { Dispatch, SetStateAction } from 'react'

import * as DialogPrimitive from '@radix-ui/react-dialog'
import { Command as CommandPrimitive } from 'cmdk'
import { ChevronRight, X } from 'lucide-react'

import {
	CommandEmpty,
	CommandInput,
	CommandItem,
	CommandList,
} from '@/components/ui/command'
import { Dialog, DialogTitle } from '@/components/ui/dialog'
import { basicMeshes } from '@/features/three-editor/components/basic-meshes'
import { useThreeEditorStore } from '@/features/three-editor/store/three-editor-store'
import { cn } from '@/lib/utils'

export function SearchEditorCommand({
	isOpen,
	setIsOpen,
	portalContainer,
}: {
	isOpen: boolean
	setIsOpen: Dispatch<SetStateAction<boolean>>
	portalContainer: HTMLElement | null
}) {
	const addObject = useThreeEditorStore((state) => state.addObject)

	return (
		<Dialog open={isOpen} onOpenChange={setIsOpen}>
			<DialogPrimitive.Portal container={portalContainer}>
				<DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
				<DialogPrimitive.Content
					className={cn(
						'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 overflow-hidden border bg-background p-0 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg'
					)}
				>
					<DialogTitle className="sr-only">Editor commands</DialogTitle>
					<CommandPrimitive className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
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
									<div className="flex gap-1 px-1">
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
					</CommandPrimitive>
					<DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
						<X className="h-4 w-4" />
						<span className="sr-only">Close</span>
					</DialogPrimitive.Close>
				</DialogPrimitive.Content>
			</DialogPrimitive.Portal>
		</Dialog>
	)
}
