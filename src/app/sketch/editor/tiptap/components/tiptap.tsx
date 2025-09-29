'use client'

import { Color } from '@tiptap/extension-color'
import { Highlight } from '@tiptap/extension-highlight'
import { Link } from '@tiptap/extension-link'
import { Placeholder } from '@tiptap/extension-placeholder'
import { Subscript } from '@tiptap/extension-subscript'
import { Superscript } from '@tiptap/extension-superscript'
import { TextAlign } from '@tiptap/extension-text-align'
import { TextStyle } from '@tiptap/extension-text-style'
import { Typography } from '@tiptap/extension-typography'
import { Underline } from '@tiptap/extension-underline'
import { EditorContent, type Extension, useEditor } from '@tiptap/react'
import { StarterKit } from '@tiptap/starter-kit'

import { TipTapFloatingMenu } from '@/features/tiptap/components/extensions/floating-menu'
import { FloatingToolbar } from '@/features/tiptap/components/extensions/floating-toolbar'
import { ImageExtension } from '@/features/tiptap/components/extensions/image'
import { ImagePlaceholder } from '@/features/tiptap/components/extensions/image-placeholder'
import { EditorToolbar } from '@/features/tiptap/components/toolbars/editor-toolbar'
import { content } from '@/features/tiptap/lib/content'
import { cn } from '@/lib/utils'

const extensions = [
	StarterKit.configure({
		orderedList: {
			HTMLAttributes: {
				class: 'list-decimal',
			},
		},
		bulletList: {
			HTMLAttributes: {
				class: 'list-disc',
			},
		},
		heading: {
			levels: [1, 2, 3, 4],
		},
	}),
	Placeholder.configure({
		emptyNodeClass: 'is-editor-empty',
		placeholder: ({ node }) => {
			switch (node.type.name) {
				case 'heading':
					return `Heading ${node.attrs.level}`
				case 'detailsSummary':
					return 'Section title'
				case 'codeBlock':
					return ''
				default:
					return "Write, type '/' for commands"
			}
		},
		includeChildren: false,
	}),
	TextAlign.configure({
		types: ['heading', 'paragraph'],
	}),
	TextStyle,
	Subscript,
	Superscript,
	Underline,
	Link,
	Color,
	Highlight.configure({
		multicolor: true,
	}),
	ImageExtension,
	ImagePlaceholder,
	Typography,
]

export function Tiptap({ className }: { className?: string }) {
	const editor = useEditor({
		extensions: extensions as Extension[],
		content,
		shouldRerenderOnTransaction: true, // ✅ Required for active state highlighting
		immediatelyRender: false, // ✅ Prevents hydration mismatches in Next.js
		editorProps: {
			attributes: {
				class: 'max-w-full focus:outline-none',
			},
		},
		injectCSS: true,
		onUpdate: () => {
			// Do something with the editor content
		},
	})

	if (!editor) return null

	return (
		<div
			className={cn(
				'relative h-fit w-full overflow-hidden border bg-card sm:pb-0',
				className
			)}
		>
			<EditorToolbar editor={editor} />
			<FloatingToolbar editor={editor} />
			<TipTapFloatingMenu editor={editor} />
			<EditorContent
				editor={editor}
				className="min-h-[600px] w-full cursor-text sm:p-4"
			/>
		</div>
	)
}
