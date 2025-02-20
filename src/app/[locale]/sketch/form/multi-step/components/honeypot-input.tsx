import { useFormContext } from 'react-hook-form'

import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

export function HoneypotInput() {
	const form = useFormContext()
	return (
		<div
			aria-hidden="true"
			style={{
				width: 0,
				height: 0,
				position: 'absolute',
				display: 'none',
			}}
		>
			<FormField
				name="name"
				control={form.control}
				render={({ field }) => (
					<FormItem>
						<FormLabel>Name</FormLabel>
						<FormControl>
							<Input type="text" {...field} />
						</FormControl>
					</FormItem>
				)}
			/>
			<FormField
				name="email"
				control={form.control}
				render={({ field }) => (
					<FormItem>
						<FormLabel>Email</FormLabel>
						<FormControl>
							<Input {...field} />
						</FormControl>
					</FormItem>
				)}
			/>
		</div>
	)
}
