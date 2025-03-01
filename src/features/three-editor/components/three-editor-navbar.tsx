import { useEffect, useState } from 'react'

import { Search } from 'lucide-react'

import { Button } from '@/components/ui/button'

import { SearchEditorCommand } from './search-editor-command'
import { ThreeEditorAppMenu } from './three-editor-app-menu'

export function ThreeEditorNavbar() {
	const [isCommandOpen, setIsCommandOpen] = useState(false)

	useEffect(() => {
		const down = (event: KeyboardEvent) => {
			if (event.key === 'k' && (event.metaKey || event.ctrlKey)) {
				event.preventDefault()
				setIsCommandOpen((isOpen) => !isOpen)
			}
		}

		document.addEventListener('keydown', down)
		return () => document.removeEventListener('keydown', down)
	}, [])

	return (
		<div>
			<SearchEditorCommand
				isOpen={isCommandOpen}
				setIsOpen={setIsCommandOpen}
			/>

			<div className="flex items-center gap-4 border">
				<ThreeEditorAppMenu />

				<Button
					variant="ghost"
					className="hidden h-7 w-80 items-center gap-2 bg-muted px-2 lg:flex"
					onClick={() => {
						setIsCommandOpen(true)
					}}
				>
					<Search className="text-muted-foreground" size="20" />
					<p className="text-muted-foreground">Commands</p>

					<span className="ml-auto text-xs tracking-widest text-muted-foreground">
						⌘K
					</span>
				</Button>
			</div>
		</div>
	)
}
