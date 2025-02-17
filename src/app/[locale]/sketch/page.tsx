import Link from 'next/link'

import { SketchCard } from '@/components/sketch/sketch-card'

export default async function Sketch() {
	const sketches = [
		{
			title: 'Multi-page form',
			description: 'A form wizard using React-hook-form and framer-motion.',
			href: '/sketch/multi-page-form-wizard/personal-information',
		},
	]

	return (
		<main id="main" className="flex w-full items-center justify-center">
			<ul
				className="container grid w-full grid-cols-1 gap-4 py-16 lg:grid-cols-2 2xl:grid-cols-3"
				aria-label="Sketches -- A list of things that I built for learning purpose."
			>
				{sketches.map(({ title, description, href }) => (
					<li key={title} aria-labelledby="sketch-title">
						<Link prefetch href={href}>
							<SketchCard title={title} description={description}></SketchCard>
						</Link>
					</li>
				))}
			</ul>
		</main>
	)
}
