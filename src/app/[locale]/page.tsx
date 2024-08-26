import { getTranslations } from "next-intl/server";

export default async function Home() {
	const t = await getTranslations("Home");
	return (
		<main id="main" className="flex gap-4 items-center justify-center w-full">
			<h1>deliver Secure and Accessible web app</h1>
		</main>
	);
}
