import { DnaIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

export function Menu() {
	return (
		<nav className="w-full container border-b py-4 bg-white dark:bg-black backdrop-blur-sm flex">
			<div>
				<Link href="/">
					<DnaIcon className="scale-125" />
				</Link>
			</div>
			<ul className="ml-auto flex gap-4">
				<li>
					<a href="/about">About</a>
				</li>
				<li>
					<a href="/sketch">Sketch</a>
				</li>
			</ul>
		</nav>
	);
}
