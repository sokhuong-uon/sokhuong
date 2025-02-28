import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuPortal,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export function ThreeEditorAppMenu() {
	const meshMenu = [
		{
			name: 'Box',
		},
		{
			name: 'Capsule',
		},
		{
			name: 'Circle',
		},
		{
			name: 'Cylinder',
		},
		{
			name: 'Dodecahedron',
		},
		{
			name: 'Tetrahedron',
		},
		{
			name: 'Icosahedron',
		},
		{
			name: 'Octahedron',
		},
		{
			name: 'Tube',
		},
		{
			name: 'Plane',
		},
		{
			name: 'Ring',
		},
		{
			name: 'UV Sphere',
		},
		{
			name: 'Ico Sphere',
		},
		{
			name: 'Lathe',
		},
		{
			name: 'Torus',
		},
		{
			name: 'TorusKnot',
		},
	]

	const lightMenu = [
		{
			name: 'Ambient',
		},
		{
			name: 'Directional',
		},
		{
			name: 'Hemisphere',
		},
		{
			name: 'Point',
		},
		{
			name: 'Spot',
		},
	]

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
									<DropdownMenuItem key={fileNewMenuItem.name}>
										<span>{fileNewMenuItem.name}</span>
									</DropdownMenuItem>
								))}
							</DropdownMenuSubContent>
						</DropdownMenuPortal>
					</DropdownMenuSub>

					<DropdownMenuItem>Open</DropdownMenuItem>
					<DropdownMenuItem>Save</DropdownMenuItem>

					<DropdownMenuSeparator />

					<DropdownMenuItem>Import</DropdownMenuItem>

					<DropdownMenuSub>
						<DropdownMenuSubTrigger>
							<span>Export</span>
						</DropdownMenuSubTrigger>
						<DropdownMenuPortal>
							<DropdownMenuSubContent>
								{fileExportMenu.map((fileExportMenuItem) => (
									<DropdownMenuItem key={fileExportMenuItem.name}>
										<span>{fileExportMenuItem.name}</span>
									</DropdownMenuItem>
								))}
							</DropdownMenuSubContent>
						</DropdownMenuPortal>
					</DropdownMenuSub>
				</DropdownMenuContent>
			</DropdownMenu>

			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button size="sm" variant="ghost">
						Edit
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent>
					<DropdownMenuItem>
						<span>Undo</span>
						<DropdownMenuShortcut>⌘Z</DropdownMenuShortcut>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<span>Redo</span>
						<DropdownMenuShortcut>⇧⌘Z</DropdownMenuShortcut>
					</DropdownMenuItem>

					<DropdownMenuSeparator />
					<DropdownMenuItem>Center</DropdownMenuItem>
					<DropdownMenuItem>Clone</DropdownMenuItem>
					<DropdownMenuItem>
						<span>Delete</span>
						<DropdownMenuShortcut>Del</DropdownMenuShortcut>
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>

			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button size="sm" variant="ghost">
						Add
					</Button>
				</DropdownMenuTrigger>

				<DropdownMenuContent>
					<DropdownMenuItem>Group</DropdownMenuItem>

					<DropdownMenuSub>
						<DropdownMenuSubTrigger>
							<span>Mesh</span>
						</DropdownMenuSubTrigger>
						<DropdownMenuPortal>
							<DropdownMenuSubContent>
								{meshMenu.map((meshMenuItem) => (
									<DropdownMenuItem key={meshMenuItem.name}>
										<span>{meshMenuItem.name}</span>
									</DropdownMenuItem>
								))}
							</DropdownMenuSubContent>
						</DropdownMenuPortal>
					</DropdownMenuSub>

					<DropdownMenuSub>
						<DropdownMenuSubTrigger>
							<span>Light</span>
						</DropdownMenuSubTrigger>
						<DropdownMenuPortal>
							<DropdownMenuSubContent>
								{lightMenu.map((lightMenuItem) => (
									<DropdownMenuItem key={lightMenuItem.name}>
										<span>{lightMenuItem.name}</span>
									</DropdownMenuItem>
								))}
							</DropdownMenuSubContent>
						</DropdownMenuPortal>
					</DropdownMenuSub>

					<DropdownMenuSub>
						<DropdownMenuSubTrigger>
							<span>Camera</span>
						</DropdownMenuSubTrigger>
						<DropdownMenuPortal>
							<DropdownMenuSubContent>
								<DropdownMenuItem>
									<span>Perspective</span>
								</DropdownMenuItem>
								<DropdownMenuItem>
									<span>Orthographic</span>
								</DropdownMenuItem>
							</DropdownMenuSubContent>
						</DropdownMenuPortal>
					</DropdownMenuSub>
				</DropdownMenuContent>
			</DropdownMenu>

			<Button variant="ghost" size="sm">
				View
			</Button>
			<Button variant="ghost" size="sm">
				Help
			</Button>
		</div>
	)
}
