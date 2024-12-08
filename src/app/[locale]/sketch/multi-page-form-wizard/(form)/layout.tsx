'use client'

import { usePathname } from 'next/navigation'
import { PropsWithChildren } from 'react'

import { Card } from '@/components/ui/card'

import { SignUpFormProvider } from './components/sign-up-form-context'
import {
  SignUpStepProvider,
  getSignUpStepBasedOnPath,
} from './components/sign-up-step-context'
import { StepIndicator } from './components/step-indicator'

export default function SignUpLayout({ children }: PropsWithChildren) {
  const pathname = usePathname()

  return (
    <SignUpStepProvider initialStep={getSignUpStepBasedOnPath(pathname)}>
      <SignUpFormProvider>
        <div className="flex h-dvh w-dvw items-center justify-center">
          <div className="container relative flex flex-col items-center justify-center gap-12 py-8">
            <StepIndicator />
            <div className="mx-auto w-full max-w-lg">
              <Card className="overflow-hidden">{children}</Card>
            </div>
          </div>
        </div>
      </SignUpFormProvider>
    </SignUpStepProvider>
  )
}
