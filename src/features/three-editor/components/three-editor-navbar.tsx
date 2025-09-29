import { RefObject, useCallback, useEffect, useState } from 'react'

import { Maximize, Minimize, Search } from 'lucide-react'

import { Button } from '@/components/ui/button'

import { SearchEditorCommand } from './search-editor-command'
import { ThreeEditorAppMenu } from './three-editor-app-menu'

interface ThreeEditorNavbarProps {
	editorRef: RefObject<HTMLDivElement | null>
	portalContainer: HTMLElement | null
}

export function ThreeEditorNavbar({
	editorRef,
	portalContainer,
}: ThreeEditorNavbarProps) {
	const [isCommandOpen, setIsCommandOpen] = useState(false)
	const [isFullscreen, setIsFullscreen] = useState(false)

	const toggleFullscreen = useCallback(() => {
		if (!document.fullscreenElement) {
			if (editorRef.current) {
				editorRef.current.requestFullscreen()
				setIsFullscreen(true)
			}
		} else {
			document.exitFullscreen()
			setIsFullscreen(false)
		}
	}, [editorRef])

	useEffect(() => {
		const down = (event: KeyboardEvent) => {
			if (event.key === 'k' && (event.metaKey || event.ctrlKey)) {
				event.preventDefault()
				setIsCommandOpen((isOpen) => !isOpen)
			}
			if (event.key === 'F11') {
				event.preventDefault()
				toggleFullscreen()
			}
		}

		document.addEventListener('keydown', down)
		return () => document.removeEventListener('keydown', down)
	}, [toggleFullscreen])

	useEffect(() => {
		const handleFullscreenChange = () => {
			setIsFullscreen(!!document.fullscreenElement)
		}

		document.addEventListener('fullscreenchange', handleFullscreenChange)
		return () =>
			document.removeEventListener('fullscreenchange', handleFullscreenChange)
	}, [])

	return (
		<div>
			<SearchEditorCommand
				isOpen={isCommandOpen}
				setIsOpen={setIsCommandOpen}
				portalContainer={portalContainer}
			/>

			<div className="flex items-center justify-between border border-border bg-background px-4 py-2 text-foreground">
				<div className="flex items-center gap-4">
					<ThreeEditorAppMenu portalContainer={portalContainer} />

					<Button
						variant="ghost"
						className="hidden h-7 w-80 items-center gap-2 bg-muted px-2 text-foreground hover:bg-accent hover:text-accent-foreground lg:flex"
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

				{/* Fullscreen Button */}
				<Button
					variant="ghost"
					size="icon"
					onClick={toggleFullscreen}
					className="h-8 w-8 text-foreground hover:bg-accent hover:text-accent-foreground"
					title={
						isFullscreen ? 'Exit Fullscreen (F11)' : 'Enter Fullscreen (F11)'
					}
				>
					{isFullscreen ? (
						<Minimize className="h-4 w-4" />
					) : (
						<Maximize className="h-4 w-4" />
					)}
				</Button>
			</div>
		</div>
	)
}
