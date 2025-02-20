'use client'

import { usePathname } from 'next/navigation'
import { PropsWithChildren } from 'react'

import { SignUpFormProvider } from '@/app/[locale]/sketch/form/multi-page/components/sign-up-form-context'
import {
	SignUpStepProvider,
	getSignUpStepBasedOnPath,
} from '@/app/[locale]/sketch/form/multi-page/components/sign-up-step-context'
import { StepIndicator } from '@/app/[locale]/sketch/form/multi-page/components/step-indicator'
import { Card } from '@/components/ui/card'

export default function SignUpLayout({ children }: PropsWithChildren) {
	const pathname = usePathname()

	return (
		<SignUpStepProvider initialStep={getSignUpStepBasedOnPath(pathname)}>
			<SignUpFormProvider>
				<div className="flex h-fit w-full flex-1 items-center justify-center">
					<div className="relative flex flex-col items-center justify-center gap-12 py-8">
						<StepIndicator />
						<div className="mx-auto w-full max-w-lg">
							<Card className="overflow-hidden border-none">{children}</Card>
						</div>
					</div>
				</div>
			</SignUpFormProvider>
		</SignUpStepProvider>
	)
}
