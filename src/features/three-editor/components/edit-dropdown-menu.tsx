'use client'

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'

import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useThreeEditorStore } from '@/features/three-editor/store/three-editor-store'
import { cn } from '@/lib/utils'

export function EditDropdownMenu({
	portalContainer,
}: {
	portalContainer: HTMLElement | null
}) {
	const { undo, redo } = useThreeEditorStore.temporal.getState()

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					size="sm"
					variant="ghost"
					className="text-foreground hover:bg-accent hover:text-accent-foreground"
				>
					Edit
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuPrimitive.Portal container={portalContainer}>
				<DropdownMenuPrimitive.Content
					sideOffset={4}
					className={cn(
						'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2'
					)}
				>
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
				</DropdownMenuPrimitive.Content>
			</DropdownMenuPrimitive.Portal>
		</DropdownMenu>
	)
}
