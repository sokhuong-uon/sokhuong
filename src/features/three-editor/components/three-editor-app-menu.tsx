import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'

import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuSub,
	DropdownMenuSubTrigger,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { cn } from '@/lib/utils'

import { AddBasicMeshDropdownMenu } from './add-basic-mesh-dropdown-menu'
import { EditDropdownMenu } from './edit-dropdown-menu'

export function ThreeEditorAppMenu({
	portalContainer,
}: {
	portalContainer: HTMLElement | null
}) {
	const fileNewMenu = [
		{
			name: 'Arkanoid',
		},
		{
			name: 'Camera',
		},
		{
			name: 'Pong',
		},
		{
			name: 'Particles',
		},
		{
			name: 'Shaders',
		},
	]

	const fileExportMenu = [
		{
			name: 'DRC',
		},
		{
			name: 'GLTF',
		},
		{
			name: 'GLB',
		},
		{
			name: 'OBJ',
		},
		{
			name: 'PLY',
		},
		{
			name: 'PLY (BINARY)',
		},
		{
			name: 'STL',
		},
		{
			name: 'STL (BINARY)',
		},
		{
			name: 'USDZ',
		},
	]

	return (
		<div className="flex gap-1">
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button size="sm" variant="ghost">
						File
					</Button>
				</DropdownMenuTrigger>

				<DropdownMenuPrimitive.Portal container={portalContainer}>
					<DropdownMenuPrimitive.Content
						sideOffset={4}
						className={cn(
							'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2'
						)}
					>
						<DropdownMenuSub>
							<DropdownMenuSubTrigger>
								<span>New</span>
							</DropdownMenuSubTrigger>
							<DropdownMenuPrimitive.Portal container={portalContainer}>
								<DropdownMenuPrimitive.SubContent
									className={cn(
										'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2'
									)}
								>
									{fileNewMenu.map((fileNewMenuItem) => (
										<DropdownMenuItem disabled key={fileNewMenuItem.name}>
											<span>{fileNewMenuItem.name}</span>
										</DropdownMenuItem>
									))}
								</DropdownMenuPrimitive.SubContent>
							</DropdownMenuPrimitive.Portal>
						</DropdownMenuSub>

						<DropdownMenuItem disabled>Open</DropdownMenuItem>
						<DropdownMenuItem disabled>Save</DropdownMenuItem>

						<DropdownMenuSeparator />

						<DropdownMenuItem disabled>Import</DropdownMenuItem>

						<DropdownMenuSub>
							<DropdownMenuSubTrigger>
								<span>Export</span>
							</DropdownMenuSubTrigger>
							<DropdownMenuPrimitive.Portal container={portalContainer}>
								<DropdownMenuPrimitive.SubContent
									className={cn(
										'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2'
									)}
								>
									{fileExportMenu.map((fileExportMenuItem) => (
										<DropdownMenuItem disabled key={fileExportMenuItem.name}>
											<span>{fileExportMenuItem.name}</span>
										</DropdownMenuItem>
									))}
								</DropdownMenuPrimitive.SubContent>
							</DropdownMenuPrimitive.Portal>
						</DropdownMenuSub>
					</DropdownMenuPrimitive.Content>
				</DropdownMenuPrimitive.Portal>
			</DropdownMenu>

			<EditDropdownMenu portalContainer={portalContainer} />
			<AddBasicMeshDropdownMenu portalContainer={portalContainer} />

			<Button variant="ghost" size="sm" disabled>
				View
			</Button>
			<Button variant="ghost" size="sm" disabled>
				Help
			</Button>
		</div>
	)
}
