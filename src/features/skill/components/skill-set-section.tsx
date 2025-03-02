import { ComponentProps } from 'react'

export function SkillSetSection({
	header,
	children,
}: ComponentProps<'div'> & { header: string }) {
	return (
		<div className="space-y-3">
			<h3 className="text-xl font-semibold">{header}</h3>
			<div className="space-y-3">{children}</div>
		</div>
	)
}
