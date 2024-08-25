import { getTranslations } from "next-intl/server";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export async function SkipToMainContent() {
	const t = await getTranslations("Layout");
	return (
		<Button
			asChild
			className="absolute left-2 top-2 h-0 overflow-hidden px-0 py-0 z-50"
		>
			<Link
				href="#main"
				className="underline overflow-hidden focus-within:h-fit focus-within:p-4 p-0 focus:outline-none "
			>
				{t("Skip to main content")}
			</Link>
		</Button>
	);
}
