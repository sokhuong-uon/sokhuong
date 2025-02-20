'use client'

import { usePathname } from 'next/navigation'
import { PropsWithChildren } from 'react'

export function StepIndicator() {
	return (
		<ul className="mx-auto flex w-80 max-w-lg justify-evenly">
			<StepIndicatorItem href="/sketch/form/multi-page">1</StepIndicatorItem>
			<StepIndicatorItem href="/sketch/form/multi-page/account">
				2
			</StepIndicatorItem>
			<StepIndicatorItem href="/sketch/form/multi-page/preferences">
				3
			</StepIndicatorItem>
		</ul>
	)
}

function StepIndicatorItem({
	href,
	children,
}: PropsWithChildren<{ href: string }>) {
	const pathname = usePathname()

	return (
		<li
			className={` ${
				pathname === href
					? 'bg-blue-500 font-bold text-white'
					: 'text-neutral-500'
			} pointer-events-none flex h-10 w-10 items-center justify-center rounded-full ring-1`}
		>
			{children}
		</li>
	)
}
