'use client'

import { useState } from 'react'

import { Button } from '@/components/ui/button'

export function Counter() {
	const [count, setCount] = useState(0)

	return (
		<div className="flex flex-col gap-2">
			<div className="flex gap-2">
				<Button className="max-w-fit" onClick={() => setCount(count + 1)}>
					Count++
				</Button>
				<Button className="max-w-fit" onClick={() => setCount(0)}>
					Reset
				</Button>
			</div>
			Count: {count}
		</div>
	)
}
