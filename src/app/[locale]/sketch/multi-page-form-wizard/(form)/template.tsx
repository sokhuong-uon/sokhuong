'use client'

import { usePathname } from 'next/navigation'
import { PropsWithChildren, useEffect } from 'react'

import { motion } from 'framer-motion'

import {
  getSignUpStepBasedOnPath,
  useSignUpStep,
} from './components/sign-up-step-context'

export default function SignUpFormTransitionTemplate({
  children,
}: PropsWithChildren) {
  const signUpStep = useSignUpStep()
  const pathname = usePathname()

  const currentStep = getSignUpStepBasedOnPath(pathname)
  useEffect(() => {
    signUpStep.setStep(getSignUpStepBasedOnPath(pathname))
  }, [signUpStep, pathname])

  const delta =
    signUpStep.previousStep.current === -1
      ? 0
      : currentStep - signUpStep.previousStep.current

  return (
    <motion.div
      initial={{
        x: delta === 0 ? 0 : delta > 0 ? 100 : -100,
        opacity: 0,
      }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.2 }}
    >
      {children}
    </motion.div>
  )
}
