'use client'

import { motion } from 'motion/react'
import { useFormContext } from 'react-hook-form'

import { useFormWizardStep } from '@/app/sketch/form/multi-step/components/form-wizard-step-context'
import {
	SignUpFormSchema,
	requiredPersonalInformationFields,
} from '@/app/sketch/form/multi-step/schema/sign-up-schema'
import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { DatePicker } from '@/components/ui/date-picker'
import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

export function PersonalInformationFormFields() {
	const form = useFormContext<SignUpFormSchema>()

	const { previousStep, step, setStep } = useFormWizardStep()
	const delta = step - previousStep.current

	const gender: { value: SignUpFormSchema['gender']; label: string }[] = [
		{ value: 'M', label: 'Male' },
		{ value: 'F', label: 'Female' },
		{ value: 'O', label: 'Other' },
	]

	const onNext = async () => {
		const isPersonalInfoFieldsValid = await form.trigger(
			requiredPersonalInformationFields,
			{
				shouldFocus: true,
			}
		)

		if (isPersonalInfoFieldsValid) {
			previousStep.current = step
			setStep((step) => step + 1)
		}
	}

	return (
		<motion.div
			initial={{ opacity: delta === 0 ? 1 : 0, x: delta === 0 ? 0 : -25 }}
			animate={{ opacity: 1, x: 0 }}
		>
			<Card className="border-none">
				<CardHeader>
					<CardTitle>Personal Information </CardTitle>
					<CardDescription id="sign-up-form-description">
						All fields are required
					</CardDescription>
				</CardHeader>

				<CardContent className="space-y-4">
					<FormField
						control={form.control}
						name="firstName"
						// eslint-disable-next-line @typescript-eslint/no-unused-vars
						render={({ field: { name, ...restofField } }) => (
							<FormItem>
								<FormLabel>First name</FormLabel>
								<FormControl>
									<Input name="first-name" {...restofField} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="gender"
						render={({ field }) => (
							<FormItem className="space-y-3">
								<FormLabel>Gender</FormLabel>
								<FormControl>
									<RadioGroup
										onValueChange={field.onChange}
										defaultValue={field.value}
										className="flex flex-col space-y-1"
									>
										{gender.map((identity) => (
											<FormItem
												key={identity.value}
												className="flex items-center space-x-3 space-y-0"
											>
												<FormControl>
													<RadioGroupItem
														value={identity.value}
														ref={field.ref}
														onBlur={field.onBlur}
													/>
												</FormControl>
												<FormLabel className="font-normal">
													{identity.label}
												</FormLabel>
											</FormItem>
										))}
									</RadioGroup>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="dateOfBirth"
						render={({ field }) => (
							<FormItem className="space-y-3">
								<FormLabel>Date of birth</FormLabel>
								<FormControl>
									<DatePicker
										ref={field.ref}
										onChange={(date) => {
											field.onChange(date?.toString())
										}}
										value={field.value ? new Date(field.value) : undefined}
										startYear={1900}
									></DatePicker>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					></FormField>
				</CardContent>
				<CardFooter className="flex justify-end">
					<Button type="button" onClick={onNext}>
						Next
					</Button>
				</CardFooter>
			</Card>
		</motion.div>
	)
}
