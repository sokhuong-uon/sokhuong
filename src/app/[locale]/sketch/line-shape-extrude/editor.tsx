'use client'

import { PropsWithChildren, useState } from 'react'

import { ViewMode, ViewModeContext } from './editor-context'

type EditorProps = PropsWithChildren

export default function Editor({ children }: EditorProps) {
	const [viewMode, setViewMode] = useState<ViewMode>('line')
	return (
		<ViewModeContext.Provider value={{ viewMode, setViewMode }}>
			<div className="container relative flex aspect-video h-auto w-full flex-col py-4">
				{children}
			</div>
		</ViewModeContext.Provider>
	)
}
