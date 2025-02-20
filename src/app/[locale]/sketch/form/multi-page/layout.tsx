'use client'

import { usePathname } from 'next/navigation'
import { PropsWithChildren } from 'react'

import { SignUpFormProvider } from '@/app/[locale]/sketch/form/multi-page/components/sign-up-form-context'
import {
	SignUpStepProvider,
	getSignUpStepBasedOnPath,
} from '@/app/[locale]/sketch/form/multi-page/components/sign-up-step-context'
import { Card } from '@/components/ui/card'

export default function SignUpLayout({ children }: PropsWithChildren) {
	const pathname = usePathname()

	return (
		<SignUpStepProvider initialStep={getSignUpStepBasedOnPath(pathname)}>
			<SignUpFormProvider>
				<div className="mx-auto mt-0 w-full max-w-md">
					<Card className="overflow-hidden border-none">{children}</Card>
				</div>
			</SignUpFormProvider>
		</SignUpStepProvider>
	)
}
