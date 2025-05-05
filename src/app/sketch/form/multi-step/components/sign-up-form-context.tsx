'use client'

import {
	Dispatch,
	PropsWithChildren,
	SetStateAction,
	createContext,
	useContext,
	useState,
} from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'

import {
	SignUpFormSchema,
	signUpFormSchema,
	signUpFormSchemaInitialValues,
} from '@/app/sketch/form/multi-step/schema/sign-up-schema'

type SignUpFormContext = {
	isSubmitting: boolean
	setIsSubmitting: Dispatch<SetStateAction<boolean>>
}

const SignUpFormContext = createContext<SignUpFormContext | undefined>(
	undefined
)

export function useSignUpForm() {
	const context = useContext(SignUpFormContext)
	if (!context) {
		throw new Error(
			'useSignUpFormContext must be used within a SignUpFormProvider'
		)
	}
	return context
}

export function SignUpFormProvider({ children }: PropsWithChildren) {
	const form = useForm<SignUpFormSchema>({
		mode: 'all',
		resolver: zodResolver(signUpFormSchema),
		defaultValues: signUpFormSchemaInitialValues as unknown as SignUpFormSchema,
	})

	const [isSubmitting, setIsSubmitting] = useState(false)

	return (
		<SignUpFormContext.Provider value={{ isSubmitting, setIsSubmitting }}>
			<FormProvider {...form}>{children}</FormProvider>
		</SignUpFormContext.Provider>
	)
}
