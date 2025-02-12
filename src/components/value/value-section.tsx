import { ValueCard } from "./value-card";

export function ValueSection() {
	return (
		<section className="container py-24 ">
			<ul
				aria-label="values"
				className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 items-center justify-center gap-4"
			>
				<li className="col-span-1 md:col-span-2">
					<ValueCard
						title="Performance"
						description="Only compute the things that need to be done."
					></ValueCard>
				</li>
				<li>
					<ValueCard
						title="Accessibility"
						description="When we try to make it accessible to everyone, it ended up being accessible to most people."
					></ValueCard>
				</li>
				<li>
					<ValueCard
						title="Aesthetic"
						description="It's not gonna be perfect. But we could push it to the limit."
					></ValueCard>
				</li>
				<li>
					<ValueCard
						title="Security"
						description="Build trust and enhance digital privacy."
					></ValueCard>
				</li>
				<li>
					<ValueCard
						title="SEO"
						description="Increase leads and digital presence."
					></ValueCard>
				</li>
				<li>
					<ValueCard
						title="Documentation"
						description="Provide clear guidelines for usage and maintenance"
					></ValueCard>
				</li>
				<li>
					<ValueCard
						title="Maintainability"
						description="Keep the number of WTFs/minute as close to 0."
					></ValueCard>
				</li>
			</ul>
		</section>
	);
}
