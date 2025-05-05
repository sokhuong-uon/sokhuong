'use client'

import { motion } from 'framer-motion'
import { useFormContext } from 'react-hook-form'

import { useFormWizardStep } from '@/app/sketch/form/multi-step/components/form-wizard-step-context'
import { PhoneInput } from '@/app/sketch/form/multi-step/components/phone-input'
import {
	SignUpFormSchema,
	requiredContactInformationFields,
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
import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

export function ContactInformationFormFields() {
	const form = useFormContext<SignUpFormSchema>()

	const { previousStep, step, setStep } = useFormWizardStep()
	const isDeltaPositive = step - previousStep.current > 0

	const onPrevious = () => {
		previousStep.current = step
		setStep((step) => step - 1)
	}

	const onNext = async () => {
		const isPersonalInfoFieldsValid = await form.trigger(
			requiredContactInformationFields,
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
			initial={{ opacity: 0, x: isDeltaPositive ? 25 : -25 }}
			animate={{ opacity: 1, x: 0 }}
		>
			<Card className="border-none">
				<CardHeader>
					<CardTitle>Contact Information </CardTitle>
					<CardDescription id="sign-up-form-description">
						All fields are required
					</CardDescription>
				</CardHeader>
				<CardContent className="space-y-4">
					<FormField
						name="phone"
						control={form.control}
						// eslint-disable-next-line @typescript-eslint/no-unused-vars
						render={({ field: { name, ...field } }) => (
							<FormItem>
								<FormLabel>Phone number</FormLabel>
								<FormControl>
									<PhoneInput
										defaultCountry="KH"
										name="tel"
										{...field}
										autoComplete="tel"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					></FormField>
					<FormField
						name="emailAddress"
						control={form.control}
						// eslint-disable-next-line @typescript-eslint/no-unused-vars
						render={({ field: { name, ...field } }) => (
							<FormItem>
								<FormLabel>Email address</FormLabel>
								<FormControl>
									<Input name="email" {...field} autoComplete="email" />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					></FormField>
				</CardContent>
				<CardFooter className="flex justify-between">
					<Button type="button" variant="outline" onClick={onPrevious}>
						Previous
					</Button>
					<Button type="button" onClick={onNext}>
						Next
					</Button>
				</CardFooter>
			</Card>
		</motion.div>
	)
}
