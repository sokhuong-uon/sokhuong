import { ModeToggle } from "@/components/darkmode-switcher";
import { Button } from "@/components/ui/button";
import { getTranslations } from "next-intl/server";

export default async function Home() {
  const t = await getTranslations("Home")
  return (
    <main className="flex gap-4 items-center justify-center w-full h-full">
      <Button>{t("This is a button")}</Button>
      <ModeToggle />
    </main>
  );
}
