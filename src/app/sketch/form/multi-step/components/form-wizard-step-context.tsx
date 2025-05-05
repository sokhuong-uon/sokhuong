'use client'

import {
	Dispatch,
	MutableRefObject,
	PropsWithChildren,
	SetStateAction,
	createContext,
	useContext,
	useRef,
	useState,
} from 'react'

type FormWizardStep = {
	step: number
	setStep: Dispatch<SetStateAction<number>>
	previousStep: MutableRefObject<number>
}

export const FormWizardStepContext = createContext<FormWizardStep | undefined>(
	undefined
)

export function FormWizardStepProvider({
	children,
	initialStep,
}: PropsWithChildren<{ initialStep: number }>) {
	const previousStep = useRef(0)
	const [step, setStep] = useState(initialStep)

	return (
		<FormWizardStepContext.Provider
			value={{
				setStep,
				step,
				previousStep: previousStep,
			}}
		>
			{children}
		</FormWizardStepContext.Provider>
	)
}

export function useFormWizardStep() {
	const context = useContext(FormWizardStepContext)
	if (context === undefined) {
		throw new Error(
			'useFormWizardStep must be used within a FormWizardStepProvider'
		)
	}
	return context
}
