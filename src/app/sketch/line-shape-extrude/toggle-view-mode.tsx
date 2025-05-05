'use client'

import { useContext } from 'react'

import { Button } from '@/components/ui/button'

import { ViewModeContext } from './editor-context'

export function ToggleViewMode() {
	const { setViewMode } = useContext(ViewModeContext)
	return (
		<div>
			<div className="flex gap-2">
				<Button onClick={() => setViewMode('line')}>Line</Button>
				<Button onClick={() => setViewMode('shape')}>Solid</Button>
				<Button onClick={() => setViewMode('extrude')}>Extrude</Button>
			</div>
		</div>
	)
}
