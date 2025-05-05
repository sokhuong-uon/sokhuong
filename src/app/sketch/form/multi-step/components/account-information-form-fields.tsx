'use client'

import { motion } from 'framer-motion'
import { LoaderCircle } from 'lucide-react'
import { useFormContext } from 'react-hook-form'

import { useFormWizardStep } from '@/app/sketch/form/multi-step/components/form-wizard-step-context'
import { HoneypotInput } from '@/app/sketch/form/multi-step/components/honeypot-input'
import { PasswordInput } from '@/app/sketch/form/multi-step/components/password-input'
import { useSignUpForm } from '@/app/sketch/form/multi-step/components/sign-up-form-context'
import { SignUpFormSchema } from '@/app/sketch/form/multi-step/schema/sign-up-schema'
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
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

export function AccountInformationFormFields() {
	const form = useFormContext<SignUpFormSchema>()

	const { isSubmitting } = useSignUpForm()

	const { previousStep, step, setStep } = useFormWizardStep()
	const isDeltaPositive = step - previousStep.current > 0

	const onPrevious = () => {
		previousStep.current = step
		setStep((step) => step - 1)
	}

	return (
		<motion.div
			initial={{ opacity: 0, x: isDeltaPositive ? 25 : 0 }}
			animate={{ opacity: 1, x: 0 }}
		>
			<Card className="border-none">
				<CardHeader>
					<CardTitle>Account Details</CardTitle>
					<CardDescription id="sign-up-form-description">
						All fields are required
					</CardDescription>
				</CardHeader>

				<CardContent className="space-y-4">
					<FormField
						name="username"
						control={form.control}
						render={({ field }) => (
							<FormItem>
								<FormLabel>Username</FormLabel>
								<FormControl>
									<Input {...field} autoComplete="username" />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					></FormField>

					<FormField
						name="password"
						control={form.control}
						render={({ field }) => (
							<FormItem>
								<FormLabel>Password</FormLabel>
								<FormControl>
									<PasswordInput {...field} autoComplete="new-password" />
								</FormControl>
								<FormMessage />
								<FormDescription>
									Must be at least 8 characters long. Contains at least one
									uppercase letter, one lowercase letter, and one digit
								</FormDescription>
							</FormItem>
						)}
					></FormField>
					<FormField
						name="confirmPassword"
						control={form.control}
						render={({ field, fieldState }) => (
							<FormItem>
								<FormLabel>Confirm password</FormLabel>
								<FormControl>
									<PasswordInput {...field} autoComplete="new-password" />
								</FormControl>
								<FormMessage>{fieldState.error?.message}</FormMessage>
							</FormItem>
						)}
					></FormField>

					<HoneypotInput />
				</CardContent>

				<CardFooter className="flex justify-between">
					<Button type="button" variant="outline" onClick={onPrevious}>
						Previous
					</Button>

					<Button
						type="submit"
						disabled={isSubmitting}
						className="space-x-2"
						aria-busy={isSubmitting}
						aria-label={isSubmitting ? 'Submitting form...' : 'Submit form'}
					>
						{isSubmitting ? (
							<>
								<LoaderCircle className="animate-spin" aria-hidden="true" />
								<span>Submitting...</span>
							</>
						) : (
							'Submit'
						)}
					</Button>
				</CardFooter>
			</Card>
		</motion.div>
	)
}
