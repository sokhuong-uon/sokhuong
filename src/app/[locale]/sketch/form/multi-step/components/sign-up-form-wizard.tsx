'use client'

import { useFormContext } from 'react-hook-form'

import { AccountInformationFormFields } from '@/app/[locale]/sketch/form/multi-step/components/account-information-form-fields'
import { ContactInformationFormFields } from '@/app/[locale]/sketch/form/multi-step/components/contact-information-form-fields'
import { useFormWizardStep } from '@/app/[locale]/sketch/form/multi-step/components/form-wizard-step-context'
import { PersonalInformationFormFields } from '@/app/[locale]/sketch/form/multi-step/components/personal-information-form-fields'
import { useSignUpForm } from '@/app/[locale]/sketch/form/multi-step/components/sign-up-form-context'
import { SignUpFormSchema } from '@/app/[locale]/sketch/form/multi-step/schema/sign-up-schema'

export function SignUpFormWizard() {
	const { step } = useFormWizardStep()
	const { handleSubmit } = useFormContext<SignUpFormSchema>()

	const { setIsSubmitting } = useSignUpForm()

	const onSubmit = (data: SignUpFormSchema) => {
		const formData = new FormData()
		Object.entries(data).forEach(([key, value]) => {
			formData.append(key, value)
		})

		setIsSubmitting(true)
	}

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			aria-describedby="sign-up-form-description"
		>
			{step === 0 && <PersonalInformationFormFields />}
			{step === 1 && <ContactInformationFormFields />}
			{step === 2 && <AccountInformationFormFields />}
		</form>
	)
}
