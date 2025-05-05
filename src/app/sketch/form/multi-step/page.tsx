import { FormWizardStepProvider } from './components/form-wizard-step-context'
import { SignUpFormProvider } from './components/sign-up-form-context'
import { SignUpFormWizard } from './components/sign-up-form-wizard'

export default function MultiStepFormPage() {
	return (
		<div className="mx-auto max-w-md">
			<FormWizardStepProvider initialStep={0}>
				<SignUpFormProvider>
					<SignUpFormWizard />
				</SignUpFormProvider>
			</FormWizardStepProvider>
		</div>
	)
}
