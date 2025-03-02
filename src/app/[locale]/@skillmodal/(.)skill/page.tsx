'use client'

import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog'
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
} from '@/components/ui/drawer'
import { SkillSetSection } from '@/features/skill/components/skill-set-section'
import { useMediaQuery } from '@/hooks/use-media-query'

const skills = [
	{
		title: 'Front-end development',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, at voluptates voluptate sint atque fugit, consequuntur nobis consequatur obcaecati, eaque velit soluta doloremque voluptatibus ab! Laboriosam iste magnam eos eligendi!',
		technologies: [],
	},
	{
		title: 'Back-end development',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, at voluptates voluptate sint atque fugit, consequuntur nobis consequatur obcaecati, eaque velit soluta doloremque voluptatibus ab! Laboriosam iste magnam eos eligendi!',
		technologies: [],
	},
	{
		title: 'Coninuous Integration Continuous Delivery (CI/CD)',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, at voluptates voluptate sint atque fugit, consequuntur nobis consequatur obcaecati, eaque velit soluta doloremque voluptatibus ab! Laboriosam iste magnam eos eligendi!',
		technologies: [],
	},
	{
		title: 'Security',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, at voluptates voluptate sint atque fugit, consequuntur nobis consequatur obcaecati, eaque velit soluta doloremque voluptatibus ab! Laboriosam iste magnam eos eligendi!',
		technologies: [],
	},
	{
		title: 'Art & Design',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, at voluptates voluptate sint atque fugit, consequuntur nobis consequatur obcaecati, eaque velit soluta doloremque voluptatibus ab! Laboriosam iste magnam eos eligendi!',
		technologies: [],
	},
]

export default function SkillDetail() {
	const router = useRouter()

	const isDesktop = useMediaQuery('(min-width: 768px)')

	if (isDesktop) {
		return (
			<Dialog open={true} onOpenChange={() => router.back()}>
				<DialogContent className="h-full max-h-[calc(100dvh-5rem)] min-w-[calc(100dvw-5rem)]">
					<DialogHeader className="sr-only">
						<DialogTitle>Skill detail</DialogTitle>
						<DialogDescription>
							Detail information about my skill set
						</DialogDescription>
					</DialogHeader>

					<div className="space-y-8 overflow-y-auto px-4">
						{skills.map((skill) => (
							<SkillSetSection header={skill.title}>
								{skill.description}
							</SkillSetSection>
						))}
					</div>
				</DialogContent>
			</Dialog>
		)
	}

	return (
		<Drawer open={true} onOpenChange={() => router.back()}>
			<DrawerContent className="max-w-[100dvw]">
				<DrawerHeader>
					<DrawerTitle>Skill set</DrawerTitle>
					<DrawerDescription className="sr-only">
						Detail information about my skill set
					</DrawerDescription>
				</DrawerHeader>

				<div className="max-h-[calc(100dvh-15rem)] space-y-8 overflow-y-auto px-4">
					{skills.map((skill) => (
						<SkillSetSection header={skill.title}>
							{skill.description}
						</SkillSetSection>
					))}
				</div>

				<DrawerFooter className="pt-2">
					<DrawerClose asChild>
						<Button variant="outline">Close</Button>
					</DrawerClose>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	)
}
