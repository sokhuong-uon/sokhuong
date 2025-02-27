'use client'

import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

export const Tiptap = () => {
	const editor = useEditor({
		extensions: [StarterKit],
		content: '<p>Edit here...</p>',
		injectCSS: true,
	})

	return <EditorContent editor={editor} className="relative h-16 min-h-16" />
}
