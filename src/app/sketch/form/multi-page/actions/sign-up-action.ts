'use server'

import { signUpFormSchema } from '@/app/sketch/form/multi-page/schemas/sign-up-schema'

interface FormState {
	error: string | null
	success: boolean
	fields?: Record<string, string>
}

export const registerUser = async (
	prevState: FormState,
	formData: FormData
) => {
	const rawFormData = Object.fromEntries(formData)
	console.log('rawFormData', rawFormData)

	const parsedFormData = signUpFormSchema.safeParse(rawFormData)
	if (parsedFormData.error) {
		return {
			error: 'Invalid form data',
			success: false,
			fields: parsedFormData.data,
		}
	}

	if (parsedFormData.data.phone || parsedFormData.data.address) {
		// Honeypot fields are filled
		// Don't bother :)
		return {
			error: null,
			success: true,
		}
	}

	// do something
	console.log('User registered successfully', parsedFormData.data)

	return {
		error: null,
		success: true,
	}
}
