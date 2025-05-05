import { useFormContext } from 'react-hook-form'

import { SignUpFormSchema } from '@/app/sketch/form/multi-page/schemas/sign-up-schema'
import { FormControl, FormField, FormItem } from '@/components/ui/form'
import { Input } from '@/components/ui/input'

export function HoneypotInput() {
	const form = useFormContext<SignUpFormSchema>()
	return (
		<div
			aria-hidden="true"
			style={{
				width: 0,
				height: 0,
				position: 'absolute',
			}}
		>
			<FormField
				name="phone"
				control={form.control}
				render={({ field }) => (
					<FormItem>
						<label
							htmlFor={field.name}
							style={{
								display: 'none',
							}}
						>
							Phone number
						</label>
						<FormControl>
							<Input
								type="text"
								{...field}
								id={field.name}
								tabIndex={-1}
								autoComplete="off"
								style={{
									width: 0,
									height: 0,
									display: 'none',
								}}
							/>
						</FormControl>
					</FormItem>
				)}
			/>
			<FormField
				name="address"
				control={form.control}
				render={({ field }) => (
					<FormItem>
						<label
							htmlFor={field.name}
							style={{
								display: 'none',
							}}
						>
							Address
						</label>
						<FormControl>
							<Input
								type="text"
								{...field}
								id={field.name}
								tabIndex={-1}
								autoComplete="off"
								style={{
									width: 0,
									height: 0,
									display: 'none',
								}}
							/>
						</FormControl>
					</FormItem>
				)}
			/>
		</div>
	)
}
