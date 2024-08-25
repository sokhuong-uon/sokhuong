import createMiddleware from "next-intl/middleware";
import { locales, defaultLocale } from "./i18n";

export const config = {
  matcher: ["/((?!api|_next|icon|image|logo|favicon.ico|placeholder.svg).*)"],
};

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: "as-needed"
});