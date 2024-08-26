import { getTranslations } from "next-intl/server";
import { Button } from "@/components/ui/button";

export async function SkipToMainContent() {
	const t = await getTranslations("Layout");
	return (
		<Button
			asChild
			className="absolute left-2 top-2 h-0 overflow-hidden px-0 py-0 z-50"
		>
			<a
				href="#main"
				className="underline overflow-hidden focus-within:h-fit focus-within:p-4 p-0 focus:outline-none "
			>
				{t("Skip to main content")}
			</a>
		</Button>
	);
}
