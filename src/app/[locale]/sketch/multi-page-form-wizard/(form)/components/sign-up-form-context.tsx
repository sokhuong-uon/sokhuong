'use client'

import { ReactNode } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'

import {
  SignUpFormSchema,
  signUpFormSchema,
  signUpFormSchemaInitialValues,
} from '../schemas/sign-up-schema'

export function SignUpFormProvider({ children }: { children: ReactNode }) {
  const form = useForm<SignUpFormSchema>({
    mode: 'all',
    resolver: zodResolver(signUpFormSchema),
    defaultValues: signUpFormSchemaInitialValues as SignUpFormSchema,
  })

  return <FormProvider {...form}>{children}</FormProvider>
}
