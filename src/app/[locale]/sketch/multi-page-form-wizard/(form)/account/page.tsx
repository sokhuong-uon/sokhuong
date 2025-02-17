'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FormEvent } from 'react'

import { useFormContext } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import {
	CardContent,
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

import { NextStepButtonLink } from '../components/next-button'
import { useSignUpStep } from '../components/sign-up-step-context'
import {
	SignUpFormSchema,
	requiredAccountDetailsFields,
} from '../schemas/sign-up-schema'

export default function AccountDetails() {
	const router = useRouter()
	const { trigger, control } = useFormContext<SignUpFormSchema>()
	const signUpStep = useSignUpStep()

	const handleSubmit = async (event: FormEvent) => {
		event.preventDefault()

		signUpStep.previousStep.current = 2

		const isAccountDetailsValid = await trigger(requiredAccountDetailsFields, {
			shouldFocus: true,
		})
		if (!isAccountDetailsValid) return
		router.push('/sketch/multi-page-form-wizard/preferences')
	}

	return (
		<form onSubmit={handleSubmit}>
			<legend>
				<CardHeader>
					<CardTitle>Account Details</CardTitle>
				</CardHeader>
			</legend>
			<CardContent className="space-y-4">
				<FormField
					control={control}
					name="username"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Username</FormLabel>
							<FormControl>
								<Input {...field} />
							</FormControl>
							<FormDescription>
								This is your unique username that will be used to login.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={control}
					name="password"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Password</FormLabel>
							<FormControl>
								<Input {...field} type="password" />
							</FormControl>
							<FormDescription>
								Password must be at least 8 characters long and contain at least
								one uppercase letter, one lowercase letter, and one number.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
			</CardContent>
			<CardFooter className="flex justify-between">
				<Button variant="outline" asChild>
					<Link
						onClick={() => (signUpStep.previousStep.current = 2)}
						href="/sketch/multi-page-form-wizard/personal-information"
					>
						Previous
					</Link>
				</Button>
				<NextStepButtonLink
					onClick={handleSubmit}
					href="/sketch/multi-page-form-wizard/preferences"
					prefetch
					isDisabled={false}
				>
					Next
				</NextStepButtonLink>
			</CardFooter>
		</form>
	)
}
