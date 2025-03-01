import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuPortal,
	DropdownMenuSeparator,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import { AddBasicMeshDropdownMenu } from './add-basic-mesh-dropdown-menu'
import { EditDropdownMenu } from './edit-dropdown-menu'

export function ThreeEditorAppMenu() {
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

				<DropdownMenuContent>
					<DropdownMenuSub>
						<DropdownMenuSubTrigger>
							<span>New</span>
						</DropdownMenuSubTrigger>
						<DropdownMenuPortal>
							<DropdownMenuSubContent>
								{fileNewMenu.map((fileNewMenuItem) => (
									<DropdownMenuItem disabled key={fileNewMenuItem.name}>
										<span>{fileNewMenuItem.name}</span>
									</DropdownMenuItem>
								))}
							</DropdownMenuSubContent>
						</DropdownMenuPortal>
					</DropdownMenuSub>

					<DropdownMenuItem disabled>Open</DropdownMenuItem>
					<DropdownMenuItem disabled>Save</DropdownMenuItem>

					<DropdownMenuSeparator />

					<DropdownMenuItem disabled>Import</DropdownMenuItem>

					<DropdownMenuSub>
						<DropdownMenuSubTrigger>
							<span>Export</span>
						</DropdownMenuSubTrigger>
						<DropdownMenuPortal>
							<DropdownMenuSubContent>
								{fileExportMenu.map((fileExportMenuItem) => (
									<DropdownMenuItem disabled key={fileExportMenuItem.name}>
										<span>{fileExportMenuItem.name}</span>
									</DropdownMenuItem>
								))}
							</DropdownMenuSubContent>
						</DropdownMenuPortal>
					</DropdownMenuSub>
				</DropdownMenuContent>
			</DropdownMenu>

			<EditDropdownMenu />
			<AddBasicMeshDropdownMenu />

			<Button variant="ghost" size="sm" disabled>
				View
			</Button>
			<Button variant="ghost" size="sm" disabled>
				Help
			</Button>
		</div>
	)
}
