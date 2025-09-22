import { Tiptap } from '@/app/sketch/editor/tiptap/components/tiptap'

export default function TiptapPage() {
	return (
		<div className="w-full md:max-w-[calc(100vw-19rem)] lg:max-w-[calc(100vw-21rem)] xl:max-w-[calc(100vw-30rem)]">
			<Tiptap className="w-full" />
		</div>
	)
}
