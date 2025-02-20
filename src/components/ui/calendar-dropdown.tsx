'use client'

import * as React from 'react'

import { DropdownProps } from 'react-day-picker'

import { ScrollArea } from '@/components/ui/scroll-area'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'

export function CalendarDropdown({ value, onChange, children }: DropdownProps) {
	const options = React.Children.toArray(children) as React.ReactElement<
		React.HTMLProps<HTMLOptionElement>
	>[]

	const selected = options.find((child) => child.props.value === value)

	const handleChange = (value: string) => {
		const changeEvent = {
			target: { value },
		} as React.ChangeEvent<HTMLSelectElement>
		onChange?.(changeEvent)
	}

	return (
		<Select
			value={value?.toString()}
			onValueChange={(value) => {
				handleChange(value)
			}}
		>
			<SelectTrigger className="px-1">
				<SelectValue>{selected?.props?.children}</SelectValue>
			</SelectTrigger>
			<SelectContent position="popper">
				<ScrollArea className="h-80">
					{options.map((option, id: number) => (
						<SelectItem
							key={`${option.props.value}-${id}`}
							value={option.props.value?.toString() ?? ''}
						>
							{option.props.children}
						</SelectItem>
					))}
				</ScrollArea>
			</SelectContent>
		</Select>
	)
}
