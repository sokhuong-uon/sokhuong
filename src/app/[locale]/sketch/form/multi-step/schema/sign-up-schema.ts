import { z } from 'zod'

export const personalInfoSchema = z.object({
	firstName: z.string().trim().min(1, 'Required').max(40, 'Too long'),

	dateOfBirth: z.string(),

	gender: z.enum(['M', 'F', 'O'], {
		errorMap: () => ({ message: 'Please select gender' }),
	}),
})

export const accountDetailsSchema = z.object({
	username: z
		.string()
		.min(3, 'Must be at least 3 characters')
		.regex(/^[a-zA-Z0-9_]+$/, 'Only contain letters, numbers, and underscore'),

	password: z
		.string()
		.min(8, 'Must be at least 8 characters')
		.regex(/[A-Z]/, 'Must contain at least one uppercase letter')
		.regex(/[a-z]/, 'Must contain at least one lowercase letter')
		.regex(/\d/, 'Must contain at least one digit')
		.max(50, 'Too long'),
	confirmPassword: z.string(),

	sponsorUsername: z
		.string()
		.trim()
		.min(1, 'Required')
		.max(40, 'Too long')
		.regex(/[a-zA-Z0-9\s.]+$/, 'No special character'),
})

export const contactInformationSchema = z.object({
	phone: z
		.string()
		.trim()
		.min(10, 'Required')
		.max(15, 'Too long')
		.regex(/^[0-9+]+$/, 'Phone number can only contain numbers and +'),
	emailAddress: z.string().trim().email('Invalid').max(60, 'Too long'),
})

export const signUpFormSchema = z
	.object({
		...personalInfoSchema.shape,
		...contactInformationSchema.shape,
		...accountDetailsSchema.shape,

		name: z.string().max(200).optional(),
		email: z.string().max(200).optional(),
	})
	.refine(
		(values) => {
			return values.password === values.confirmPassword
		},
		{
			message: 'Password must match',
			path: ['confirmPassword'],
		}
	)
	.refine(
		// Honey pot
		(values) => {
			return values.email?.length === 0 && values.name?.length === 0
		},
		{
			message: "Don't go to server :)",
		}
	)

export const signUpFormSchemaInitialValues: Omit<SignUpFormSchema, 'gender'> & {
	gender: string
} = {
	firstName: '',
	gender: '',
	dateOfBirth: '',

	phone: '',
	emailAddress: '',

	username: '',
	password: '',
	confirmPassword: '',
	sponsorUsername: '',

	name: '',
	email: '',
}

export type SignUpFormSchema = z.infer<typeof signUpFormSchema>
export type PersonalInformationSchema = z.infer<typeof personalInfoSchema>
export type ContactInformationSchema = z.infer<typeof contactInformationSchema>
export type AccountDetailsSchema = z.infer<typeof accountDetailsSchema>

export type PersonalInformationFields = keyof PersonalInformationSchema
export type ContactInformationFields = keyof ContactInformationSchema
export type AccountDetailsFields = keyof AccountDetailsSchema

export const requiredPersonalInformationFields = Object.keys(
	personalInfoSchema.shape
) as PersonalInformationFields[]

export const requiredContactInformationFields = Object.keys(
	contactInformationSchema.shape
) as ContactInformationFields[]

export const requiredAccountDetailsFields = Object.keys(
	accountDetailsSchema.shape
) as AccountDetailsFields[]
