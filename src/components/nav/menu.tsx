import { DnaIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

export function Menu() {
	return (
		<nav className="w-full container border-b py-4 bg-white dark:bg-black backdrop-blur-sm flex">
			<div>
				<Button asChild variant={"link"}>
					<Link href="/">
						<DnaIcon className="scale-125" />
						<p className="sr-only">Home</p>
					</Link>
				</Button>
			</div>
			<ul className="ml-auto flex gap-4">
				<li>
					<Button asChild variant={"link"} className="focus-within:underline">
						<Link href="/about">About</Link>
					</Button>
				</li>
				<li>
					<Button asChild variant={"link"} className="focus-within:underline">
						<Link href="/sketch">Sketch</Link>
					</Button>
				</li>
			</ul>
		</nav>
	);
}
