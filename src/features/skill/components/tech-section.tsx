import { ComponentProps } from 'react'

import { ComponentIcon } from 'lucide-react'

import { SkillsRadar } from '@/features/skill/components/skills-radar'
import { cn } from '@/lib/utils'

export function SkillSection({ className, ...props }: ComponentProps<'div'>) {
	return (
		<div
			{...props}
			className={cn('relative col-span-3 h-full py-20', className)}
		>
			<div className="h-full w-full p-16 pt-10 md:px-10">
				<div className="flex h-full w-full flex-col items-center justify-center gap-3">
					<div className="flex items-center gap-2">
						<ComponentIcon className="h-4 w-4" />
						<p className="text-gray-600 dark:text-gray-400">
							Pick the right tech
						</p>
					</div>
					<p className="mt-4 max-w-md text-center text-xl font-normal tracking-tighter sm:text-4xl">
						<strong>Diverse skill set with brilliant tools</strong>
					</p>

					<SkillsRadar />
				</div>
			</div>
		</div>
	)
}
