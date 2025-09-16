import { skills } from '@/features/skill/components/skill-list'

export default function Skill() {
	return (
		<div className="mx-auto max-w-3xl space-y-10 px-6 py-10">
			<h1 className="text-xl uppercase text-muted-foreground">Skill set</h1>

			<ul className="space-y-16">
				{skills.map((skill) => (
					<li key={skill.title}>
						<div className="space-y-3">
							<h2 className="text-2xl font-semibold">{skill.title}</h2>
							<div className="space-y-3">
								<p>{skill.description}</p>
								<ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
									{skill.technologies.map((tech) => (
										<li
											key={tech.key}
											className="flex aspect-video w-full items-center justify-center bg-muted/30"
										>
											{tech}
										</li>
									))}
								</ul>
							</div>
						</div>
					</li>
				))}
			</ul>
		</div>
	)
}
