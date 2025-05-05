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
import { ScrollArea } from '@/components/ui/scroll-area'
import { skills } from '@/features/skill/components/skill-list'
import { SkillSetSection } from '@/features/skill/components/skill-set-section'
import { useMediaQuery } from '@/hooks/use-media-query'

import { TechnologyList } from './components/technology-list'

export default function SkillDetail() {
	const router = useRouter()

	const isDesktop = useMediaQuery('(min-width: 768px)')

	if (isDesktop) {
		return (
			<Dialog open={true} onOpenChange={() => router.back()}>
				<DialogContent className="h-full max-h-[calc(100dvh-5rem)] max-w-[80ch]">
					<DialogHeader className="container px-4">
						<DialogTitle className="mx-auto text-3xl text-muted-foreground">
							Skill set
						</DialogTitle>
						<DialogDescription className="sr-only">
							Detail information about my skill set
						</DialogDescription>
					</DialogHeader>

					<ScrollArea className="mx-auto flex h-full max-w-[65ch]">
						<div className="space-y-10">
							{skills.map((skill) => (
								<SkillSetSection header={skill.title} key={skill.title}>
									<p>{skill.description}</p>
									<TechnologyList
										technologies={skill.technologies}
										className="grid-cols-3"
									/>
								</SkillSetSection>
							))}
						</div>
					</ScrollArea>
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

				<div className="max-h-[calc(100dvh-15rem)] space-y-10 overflow-y-auto px-4">
					{skills.map((skill) => (
						<SkillSetSection header={skill.title} key={skill.title}>
							<p>{skill.description}</p>
							<TechnologyList technologies={skill.technologies} />
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
