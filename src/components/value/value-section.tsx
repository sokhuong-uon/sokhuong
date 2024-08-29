import { ValueCard } from "./value-card";

export function ValueSection() {
	return (
		<section className="container py-24 ">
			<ul
				aria-label="values"
				className="grid gap-8 grid-cols-1 lg:grid-cols-2 items-center justify-center"
			>
				<li>
					<ValueCard
						title="Performance"
						description="Only compute the things that need to be done."
					></ValueCard>
				</li>
				<li>
					<ValueCard
						title="Accessible"
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
						title="Secure"
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
						title="Engaging"
						description="Bring more attention to the content."
					></ValueCard>
				</li>
				<li>
					<ValueCard
						title="Customize"
						description="Make it our own."
					></ValueCard>
				</li>
				<li>
					<ValueCard
						title="Maintainable"
						description="Keep the number of WTFs/minute as close to 0."
					></ValueCard>
				</li>
			</ul>
		</section>
	);
}
