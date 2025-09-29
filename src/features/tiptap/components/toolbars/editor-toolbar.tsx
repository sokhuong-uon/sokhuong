import { Editor } from '@tiptap/core'

import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { TooltipProvider } from '@/components/ui/tooltip'

import { AlignmentTooolbar } from './alignment'
import { BlockquoteToolbar } from './blockquote'
import { BoldToolbar } from './bold'
import { BulletListToolbar } from './bullet-list'
import { CodeToolbar } from './code'
import { CodeBlockToolbar } from './code-block'
import { ColorHighlightToolbar } from './color-and-highlight'
import { HeadingsToolbar } from './headings'
import { HorizontalRuleToolbar } from './horizontal-rule'
import { ImagePlaceholderToolbar } from './image-placeholder-toolbar'
import { ItalicToolbar } from './italic'
import { LinkToolbar } from './link'
import { OrderedListToolbar } from './ordered-list'
import { RedoToolbar } from './redo'
import { StrikeThroughToolbar } from './strikethrough'
import { ToolbarProvider } from './toolbar-provider'
import { UnderlineToolbar } from './underline'
import { UndoToolbar } from './undo'

export const EditorToolbar = ({ editor }: { editor: Editor }) => {
	return (
		<div className="sticky top-0 z-20 hidden w-full border-b bg-background sm:block">
			<ToolbarProvider editor={editor}>
				<TooltipProvider>
					<ScrollArea className="h-fit py-0.5">
						<div>
							<div className="flex items-center gap-1 px-2">
								<UndoToolbar />
								<RedoToolbar />
								<Separator orientation="vertical" className="mx-1 h-7" />

								<HeadingsToolbar />
								<BlockquoteToolbar />
								<CodeToolbar />
								<CodeBlockToolbar />
								<Separator orientation="vertical" className="mx-1 h-7" />

								<BoldToolbar />
								<ItalicToolbar />
								<UnderlineToolbar />
								<StrikeThroughToolbar />
								<LinkToolbar />
								<Separator orientation="vertical" className="mx-1 h-7" />

								<BulletListToolbar />
								<OrderedListToolbar />
								<HorizontalRuleToolbar />
								<Separator orientation="vertical" className="mx-1 h-7" />

								<AlignmentTooolbar />
								<Separator orientation="vertical" className="mx-1 h-7" />

								<ImagePlaceholderToolbar />
								<ColorHighlightToolbar />
								<Separator orientation="vertical" className="mx-1 h-7" />

								<div className="flex-1" />
							</div>
						</div>
						<ScrollBar className="hidden" orientation="horizontal" />
					</ScrollArea>
				</TooltipProvider>
			</ToolbarProvider>
		</div>
	)
}
