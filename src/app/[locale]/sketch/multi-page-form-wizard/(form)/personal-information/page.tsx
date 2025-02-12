"use client";

import { useRouter } from "next/navigation";
import { FormEvent } from "react";

import { useFormContext } from "react-hook-form";

import {
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { NextStepButtonLink } from "../components/next-button";
import { useSignUpStep } from "../components/sign-up-step-context";
import {
	PersonalInformationFields,
	SignUpFormSchema,
	requiredPersonalInformationFields,
} from "../schemas/sign-up-schema";

export default function PersonalInformationPage() {
	const router = useRouter();
	const form = useFormContext<SignUpFormSchema>();
	const signUpStep = useSignUpStep();

	const handleSubmit = async (formEvent: FormEvent) => {
		formEvent.preventDefault();

		signUpStep.previousStep.current = 1;

		const isPersonalInformationValid = await form.trigger(
			requiredPersonalInformationFields,
			{
				shouldFocus: true,
			}
		);

		if (!isPersonalInformationValid) return;
		router.push("/sketch/multi-page-form-wizard/account");
	};

	const personalInformation: {
		value: PersonalInformationFields;
		label: string;
	}[] = [
		{ value: "givenName", label: "Given Name" },
		{ value: "surname", label: "Surname" },
		{ value: "email", label: "Email" },
	];

	return (
		<form onSubmit={handleSubmit}>
			<legend>
				<CardHeader>
					<CardTitle>Personal Information</CardTitle>
				</CardHeader>
			</legend>
			<CardContent className="space-y-4">
				{personalInformation.map((info) => (
					<FormField
						key={info.value}
						control={form.control}
						name={info.value}
						render={({ field }) => (
							<FormItem>
								<FormLabel>{info.label}</FormLabel>
								<FormControl>
									<Input {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				))}
			</CardContent>
			<CardFooter className="flex justify-end">
				<NextStepButtonLink
					onClick={handleSubmit}
					href="/sketch/multi-page-form-wizard/account"
					isDisabled={false}
					prefetch
				>
					Next
				</NextStepButtonLink>
			</CardFooter>
		</form>
	);
}
