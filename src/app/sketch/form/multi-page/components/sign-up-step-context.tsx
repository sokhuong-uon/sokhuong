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

type SignUpStep = {
	step: number
	setStep: Dispatch<SetStateAction<number>>
	previousStep: MutableRefObject<number>
}

export const getSignUpStepBasedOnPath = (pathname: string) => {
	return pathname.startsWith('/sketch/form/multi-page/skill')
		? 3
		: pathname.startsWith('/sketch/form/multi-page/account')
			? 2
			: 1
}

export const SignUpContext = createContext<SignUpStep | undefined>(undefined)

export function SignUpStepProvider({
	children,
	initialStep,
}: PropsWithChildren<{ initialStep: number }>) {
	const previousStep = useRef<number>(-1)
	const [step, setStep] = useState(initialStep)

	return (
		<SignUpContext.Provider
			value={{
				setStep,
				step,
				previousStep: previousStep,
			}}
		>
			{children}
		</SignUpContext.Provider>
	)
}

export function useSignUpStep() {
	const context = useContext(SignUpContext)
	if (context === undefined) {
		throw new Error('useSignUpStep must be used within a SignUpStepProvider')
	}
	return context
}
