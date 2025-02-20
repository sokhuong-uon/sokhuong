'use client'

import * as React from 'react'

import { format, getYear } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover'
import { cn } from '@/lib/utils'

type DatePickerProps = {
	startYear?: number
	endYear?: number
	onChange?: (date?: Date) => void
	value?: Date
}

const DatePicker = React.forwardRef<HTMLButtonElement, DatePickerProps>(
	(
		{
			startYear = getYear(new Date()) - 10,
			endYear = getYear(new Date()) + 10,
			onChange,
			value,
		},
		ref
	) => {
		const [date, setDate] = React.useState<Date | undefined>(value)

		return (
			<Popover>
				<PopoverTrigger
					asChild
					ref={ref}
					className="ring-foreground ring-offset-2 focus:ring-2"
				>
					<Button
						variant={'outline'}
						className={cn(
							'w-full justify-start text-left font-normal',
							!date && 'text-muted-foreground'
						)}
					>
						<CalendarIcon className="mr-2 h-4 w-4" />
						{date ? format(date, 'PPP') : <span>Pick a date</span>}
					</Button>
				</PopoverTrigger>
				<PopoverContent className="w-auto p-0">
					<Calendar
						mode="single"
						selected={date}
						onSelect={(date) => {
							setDate(date)
							onChange?.(date)
						}}
						initialFocus
						fromYear={startYear}
						toYear={endYear}
						captionLayout="dropdown-buttons"
						defaultMonth={date}
					/>
				</PopoverContent>
			</Popover>
		)
	}
)

DatePicker.displayName = 'DatePicker'

export { DatePicker }
