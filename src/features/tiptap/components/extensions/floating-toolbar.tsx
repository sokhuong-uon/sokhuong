'use client'

import { useEffect } from 'react'

import { BubbleMenu, type Editor } from '@tiptap/react'

import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { AlignmentTooolbar } from '@/features/tiptap/components/toolbars/alignment'
import { BlockquoteToolbar } from '@/features/tiptap/components/toolbars/blockquote'
import { BoldToolbar } from '@/features/tiptap/components/toolbars/bold'
import { BulletListToolbar } from '@/features/tiptap/components/toolbars/bullet-list'
import { ColorHighlightToolbar } from '@/features/tiptap/components/toolbars/color-and-highlight'
import { HeadingsToolbar } from '@/features/tiptap/components/toolbars/headings'
import { ImagePlaceholderToolbar } from '@/features/tiptap/components/toolbars/image-placeholder-toolbar'
import { ItalicToolbar } from '@/features/tiptap/components/toolbars/italic'
import { LinkToolbar } from '@/features/tiptap/components/toolbars/link'
import { OrderedListToolbar } from '@/features/tiptap/components/toolbars/ordered-list'
import { ToolbarProvider } from '@/features/tiptap/components/toolbars/toolbar-provider'
import { UnderlineToolbar } from '@/features/tiptap/components/toolbars/underline'
import { Separator } from '@/features/tiptap/components/ui/separator'
import { TooltipProvider } from '@/features/tiptap/components/ui/tooltip'
import { useMediaQuery } from '@/features/tiptap/hooks/use-media-querry'

export function FloatingToolbar({ editor }: { editor: Editor | null }) {
	const isMobile = useMediaQuery('(max-width: 640px)')

	// Prevent default context menu on mobile
	useEffect(() => {
		if (!editor?.options.element || !isMobile) return

		const handleContextMenu = (e: Event) => {
			e.preventDefault()
		}

		const el = editor.options.element
		el.addEventListener('contextmenu', handleContextMenu)

		return () => el.removeEventListener('contextmenu', handleContextMenu)
	}, [editor, isMobile])

	if (!editor) return null

	if (isMobile) {
		return (
			<TooltipProvider>
				<BubbleMenu
					tippyOptions={{
						duration: 100,
						placement: 'bottom',
						offset: [0, 10],
					}}
					shouldShow={() => {
						// Show toolbar when editor is focused and has selection
						return editor.isEditable && editor.isFocused
					}}
					editor={editor}
					className="mx-0 w-full min-w-full rounded-sm border bg-background shadow-sm"
				>
					<ToolbarProvider editor={editor}>
						<ScrollArea className="h-fit w-full py-0.5">
							<div className="flex items-center gap-0.5 px-2">
								<div className="flex items-center gap-0.5 p-1">
									{/* Primary formatting */}
									<BoldToolbar />
									<ItalicToolbar />
									<UnderlineToolbar />
									<Separator orientation="vertical" className="mx-1 h-6" />

									{/* Structure controls */}
									<HeadingsToolbar />
									<BulletListToolbar />
									<OrderedListToolbar />
									<Separator orientation="vertical" className="mx-1 h-6" />

									{/* Rich formatting */}
									<ColorHighlightToolbar />
									<LinkToolbar />
									<ImagePlaceholderToolbar />
									<Separator orientation="vertical" className="mx-1 h-6" />

									{/* Additional controls */}
									<AlignmentTooolbar />
									<BlockquoteToolbar />
								</div>
							</div>
							<ScrollBar className="h-0.5" orientation="horizontal" />
						</ScrollArea>
					</ToolbarProvider>
				</BubbleMenu>
			</TooltipProvider>
		)
	}

	return null
}
