'use client'

import { useRouter } from 'next/navigation'

import {
	SiAntdesign,
	SiAntdesignHex,
	SiApache,
	SiAxios,
	SiAxiosHex,
	SiBlender,
	SiBlenderHex,
	SiBurpsuite,
	SiBurpsuiteHex,
	SiCloudflare,
	SiCloudflareHex,
	SiCpanel,
	SiCpanelHex,
	SiCss3,
	SiCss3Hex,
	SiDaisyui,
	SiDaisyuiHex,
	SiDeno,
	SiDocker,
	SiDockerHex,
	SiEslint,
	SiEslintHex,
	SiExpress,
	SiFigma,
	SiFigmaHex,
	SiGit,
	SiGitHex,
	SiGithub,
	SiGithubactions,
	SiGithubactionsHex,
	SiGnubash,
	SiGodaddy,
	SiGodaddyHex,
	SiGoogleanalytics,
	SiGoogleanalyticsHex,
	SiGooglesearchconsole,
	SiGooglesearchconsoleHex,
	SiGraphql,
	SiGraphqlHex,
	SiHono,
	SiHonoHex,
	SiHostinger,
	SiHostingerHex,
	SiHtml5,
	SiHtml5Hex,
	SiInsomnia,
	SiInsomniaHex,
	SiJavascript,
	SiJavascriptHex,
	SiLinux,
	SiLinuxHex,
	SiLua,
	SiMeilisearch,
	SiMeilisearchHex,
	SiMetasploit,
	SiMetasploitHex,
	SiMixpanel,
	SiMixpanelHex,
	SiMongodb,
	SiMongodbHex,
	SiMysql,
	SiMysqlHex,
	SiNeovim,
	SiNeovimHex,
	SiNextdotjs,
	SiNginx,
	SiNginxHex,
	SiNodedotjs,
	SiNodedotjsHex,
	SiNuxt,
	SiNuxtHex,
	SiOwasp,
	SiPhp,
	SiPhpHex,
	SiPhpmyadmin,
	SiPhpmyadminHex,
	SiPortainer,
	SiPortainerHex,
	SiPostgresql,
	SiPostgresqlHex,
	SiPostman,
	SiPostmanHex,
	SiPrettier,
	SiPrettierHex,
	SiPython,
	SiPythonHex,
	SiReact,
	SiReactHex,
	SiReacthookform,
	SiReacthookformHex,
	SiReactquery,
	SiReactqueryHex,
	SiResend,
	SiRust,
	SiShadcnui,
	SiStrapi,
	SiStrapiHex,
	SiSupabase,
	SiSupabaseHex,
	SiTailwindcss,
	SiTailwindcssHex,
	SiThreedotjs,
	SiTraefikproxy,
	SiTraefikproxyHex,
	SiTurborepo,
	SiTurborepoHex,
	SiTypescript,
	SiTypescriptHex,
	SiVercel,
	SiVim,
	SiVimHex,
	SiVitest,
	SiVitestHex,
	SiVuedotjs,
	SiVuedotjsHex,
	SiWebgl,
	SiZod,
	SiZodHex,
} from '@icons-pack/react-simple-icons'

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
import { SkillSetSection } from '@/features/skill/components/skill-set-section'
import { useMediaQuery } from '@/hooks/use-media-query'

const skills = [
	{
		title: 'Front-end development',
		description:
			'I started front-end development in early 2020. I have experience with several front-end technologies:',
		technologies: [
			<SiJavascript size={36} color={SiJavascriptHex} />,
			<SiTypescript size={36} color={SiTypescriptHex} />,
			<SiReact size={36} color={SiReactHex} />,
			<SiReactquery size={36} color={SiReactqueryHex} />,
			<SiAxios size={36} color={SiAxiosHex} />,
			<SiGraphql size={36} color={SiGraphqlHex} />,
			<SiNextdotjs size={36} />,
			<SiVitest size={36} color={SiVitestHex} />,
			<SiVuedotjs size={36} color={SiVuedotjsHex} />,
			<SiNuxt size={36} color={SiNuxtHex} />,
			<SiTailwindcss size={36} color={SiTailwindcssHex} />,
			<SiReacthookform size={36} color={SiReacthookformHex} />,
			<SiZod size={36} color={SiZodHex} />,
			<SiAntdesign size={36} color={SiAntdesignHex} />,
			<SiDaisyui size={36} color={SiDaisyuiHex} />,
			<SiShadcnui size={36} />,
			<SiThreedotjs size={36} />,
			<SiWebgl size={36} />,
			<SiCss3 size={36} color={SiCss3Hex} />,
			<SiHtml5 size={36} color={SiHtml5Hex} />,
			<SiGoogleanalytics size={36} color={SiGoogleanalyticsHex} />,
			<SiGooglesearchconsole size={36} color={SiGooglesearchconsoleHex} />,
			<SiMixpanel size={36} color={SiMixpanelHex} />,
		],
	},
	{
		title: 'Back-end development',
		description:
			'I rarely work on back-end application. I mostly use some back-end tools at work to research and make proof-of-cocept of a new application. In addition to that, I learn some back-end tools to use in my side-project or just purely learning to get to know the tool.',
		technologies: [
			<SiSupabase size={36} color={SiSupabaseHex} />,
			<SiMysql size={36} color={SiMysqlHex} />,
			<SiPostgresql size={36} color={SiPostgresqlHex} />,
			<SiNodedotjs size={36} color={SiNodedotjsHex} />,
			<SiExpress size={36} />,
			<SiMongodb size={36} color={SiMongodbHex} />,
			<SiHono size={36} color={SiHonoHex} />,
			<SiDeno size={36} />,
			<SiStrapi size={36} color={SiStrapiHex} />,
			<SiResend size={36} />,
			<SiMeilisearch size={36} color={SiMeilisearchHex} />,
			<SiPhp size={36} color={SiPhpHex} />,
		],
	},
	{
		title: 'Coninuous Integration, Continuous Delivery (CI/CD), and SysAdmin',
		description:
			'Setup web app project for easy collaboration. I setup deployment server and configure DNS. I back up, clean up, and load database from/to database.',
		technologies: [
			<SiTraefikproxy size={36} color={SiTraefikproxyHex} />,
			<SiGit size={36} color={SiGitHex} />,
			<SiGithub size={36} />,
			<SiGithubactions size={36} color={SiGithubactionsHex} />,
			<SiEslint size={36} color={SiEslintHex} />,
			<SiPrettier size={36} color={SiPrettierHex} />,
			<SiPortainer size={36} color={SiPortainerHex} />,
			<SiTurborepo size={36} color={SiTurborepoHex} />,
			<SiNginx size={36} color={SiNginxHex} />,
			<SiApache size={36} />,
			<SiDocker size={36} color={SiDockerHex} />,
			<SiLinux size={36} color={SiLinuxHex} />,
			<SiGnubash size={36} />,
			<SiVim size={36} color={SiVimHex} />,
			<SiNeovim size={36} color={SiNeovimHex} />,
			<SiLua size={36} />,
			<SiPhpmyadmin size={36} color={SiPhpmyadminHex} />,
			<SiCloudflare size={36} color={SiCloudflareHex} />,
			<SiVercel size={36} />,
			<SiGodaddy size={36} color={SiGodaddyHex} />,
			<SiCpanel size={36} color={SiCpanelHex} />,
			<SiHostinger size={36} color={SiHostingerHex} />,
		],
	},
	{
		title: 'Security',
		description:
			'I learn cyber security on tryhackme.com and overthewire.org. I also have more practial experience protecting my own server.',
		technologies: [
			<SiBurpsuite size={36} color={SiBurpsuiteHex} />,
			<SiMetasploit size={36} color={SiMetasploitHex} />,
			<SiLinux size={36} color={SiLinuxHex} />,
			<SiOwasp size={36} />,
		],
	},
	{
		title: 'Art & Design',
		description: '',
		technologies: [
			<SiFigma size={36} color={SiFigmaHex} />,
			<SiBlender size={36} color={SiBlenderHex} />,
			<SiThreedotjs size={36} />,
			<SiWebgl size={36} />,
		],
	},
	{
		title: 'Miscellaneous',
		description: '',
		technologies: [
			<SiRust size={36} />,
			<SiPython size={36} color={SiPythonHex} />,
			<SiPostman size={36} color={SiPostmanHex} />,
			<SiInsomnia size={36} color={SiInsomniaHex} />,
		],
	},
]

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
								<SkillSetSection header={skill.title}>
									<p>{skill.description}</p>
									<ul className="flex flex-wrap gap-3">
										{skill.technologies.map((tech) => (
											<li key={tech.key}>{tech}</li>
										))}
									</ul>
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
						<SkillSetSection header={skill.title}>
							<p>{skill.description}</p>
							<ul className="flex flex-wrap gap-3">
								{skill.technologies.map((tech, index) => (
									<li key={index}>{tech}</li>
								))}
							</ul>
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
