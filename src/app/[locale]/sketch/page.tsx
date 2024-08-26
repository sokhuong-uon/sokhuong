import { ModeToggle } from "@/components/darkmode-switcher";
import { Button } from "@/components/ui/button";
import { getTranslations } from "next-intl/server";

export default async function Sketch() {
	const t = await getTranslations("Home");
	return (
		<main id="main" className="flex items-center justify-center w-full">
			<div className="py-4 flex gap-4">
				<Button>{t("This is a button")}</Button>
				<ModeToggle />
			</div>
		</main>
	);
}
