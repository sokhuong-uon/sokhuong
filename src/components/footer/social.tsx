import Link from "next/link";
import { Button } from "../ui/button";
import { FaGithub, FaYoutube, FaLinkedin } from "react-icons/fa";

export function Social() {
	return (
		<ul className="flex gap-2" aria-label="socials">
			<li>
				<Button asChild variant={"link"} size={"icon"}>
					<Link href="https://github.com/sokhuong-uon">
						<FaGithub className="w-6 h-6" />
						<span className="sr-only">Github profile</span>
					</Link>
				</Button>
			</li>
			<li>
				<Button asChild variant={"link"} size={"icon"}>
					<Link href="https://www.youtube.com/@alotofcode">
						<FaYoutube className="w-6 h-6" />
						<span className="sr-only">YouTube channel</span>
					</Link>
				</Button>
			</li>
			<li>
				<Button asChild variant={"link"} size={"icon"}>
					<Link href="https://www.linkedin.com/in/sokhuong-uon/">
						<FaLinkedin className="w-6 h-6" />
						<span className="sr-only">LinkedIn profile</span>
					</Link>
				</Button>
			</li>
		</ul>
	);
}
