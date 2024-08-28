import Link from "next/link";
import { Button } from "../ui/button";
import { Social } from "./social";

export default function FooterMenu() {
	return (
		<>
			<Social />
			<hr />
			<div className="py-10">
				<Button asChild variant={"link"} size={"lg"} className="px-2 text-lg">
					<Link href="https://vercel.com?utm_source=sokhuong&utm_campaign=oss">
						Powered by Vercel
					</Link>
				</Button>
			</div>
		</>
	);
}
