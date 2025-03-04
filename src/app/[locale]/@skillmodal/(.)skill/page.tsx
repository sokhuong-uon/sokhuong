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
	SiDrizzle,
	SiDrizzleHex,
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
			<SiJavascript key="JavaScript" size={36} color={SiJavascriptHex} />,
			<SiTypescript key="TypeScript" size={36} color={SiTypescriptHex} />,
			<SiReact key="React" size={36} color={SiReactHex} />,
			<SiReactquery key="ReactQuery" size={36} color={SiReactqueryHex} />,
			<SiAxios key="Axios" size={36} color={SiAxiosHex} />,
			<SiGraphql key="GraphQL" size={36} color={SiGraphqlHex} />,
			<SiNextdotjs key="NextJS" size={36} />,
			<SiVitest key="Vitest" size={36} color={SiVitestHex} />,
			<SiVuedotjs key="VueJS" size={36} color={SiVuedotjsHex} />,
			<SiNuxt key="Nuxt" size={36} color={SiNuxtHex} />,
			<SiTailwindcss key="TailwindCSS" size={36} color={SiTailwindcssHex} />,
			<SiReacthookform
				key="ReactHookForm"
				size={36}
				color={SiReacthookformHex}
			/>,
			<SiZod key="Zod" size={36} color={SiZodHex} />,
			<SiAntdesign key="AntDesign" size={36} color={SiAntdesignHex} />,
			<SiDaisyui key="DaisyUI" size={36} color={SiDaisyuiHex} />,
			<SiShadcnui key="ShadcnUI" size={36} />,
			<SiThreedotjs key="ThreeJS" size={36} />,
			<SiWebgl key="WebGL" size={36} />,
			<SiCss3 key="CSS3" size={36} color={SiCss3Hex} />,
			<SiHtml5 key="HTML5" size={36} color={SiHtml5Hex} />,
			<SiGoogleanalytics
				key="GoogleAnalytics"
				size={36}
				color={SiGoogleanalyticsHex}
			/>,
			<SiGooglesearchconsole
				key="GoogleSearchConsole"
				size={36}
				color={SiGooglesearchconsoleHex}
			/>,
			<SiMixpanel key="Mixpanel" size={36} color={SiMixpanelHex} />,
		],
	},
	{
		title: 'Back-end development',
		description:
			'I rarely work on back-end application. I mostly use some back-end tools at work to research and make proof-of-cocept of a new application. In addition to that, I learn some back-end tools to use in my side-project or just purely learning to get to know the tool.',
		technologies: [
			<SiSupabase key="Supabase" size={36} color={SiSupabaseHex} />,
			<SiDrizzle key="Supabase" size={36} color={SiDrizzleHex} />,
			<SiMysql key="MySQL" size={36} color={SiMysqlHex} />,
			<SiPostgresql key="PostgreSQL" size={36} color={SiPostgresqlHex} />,
			<SiNodedotjs key="NodeJS" size={36} color={SiNodedotjsHex} />,
			<SiExpress key="Express" size={36} />,
			<SiMongodb key="MongoDB" size={36} color={SiMongodbHex} />,
			<SiHono key="Hono" size={36} color={SiHonoHex} />,
			<SiDeno key="Deno" size={36} />,
			<SiStrapi key="Strapi" size={36} color={SiStrapiHex} />,
			<SiResend key="Resend" size={36} />,
			<SiMeilisearch key="Meilisearch" size={36} color={SiMeilisearchHex} />,
			<SiPhp key="PHP" size={36} color={SiPhpHex} />,
		],
	},
	{
		title: 'Coninuous Integration, Continuous Delivery (CI/CD), and SysAdmin',
		description:
			'Setup web app project for easy collaboration. I setup deployment server and configure DNS. I back up, clean up, and load database from/to database.',
		technologies: [
			<SiTraefikproxy key="TraefikProxy" size={36} color={SiTraefikproxyHex} />,
			<SiGit key="Git" size={36} color={SiGitHex} />,
			<SiGithub key="GitHub" size={36} />,
			<SiGithubactions
				key="GitHubActions"
				size={36}
				color={SiGithubactionsHex}
			/>,
			<SiEslint key="ESLint" size={36} color={SiEslintHex} />,
			<SiPrettier key="Prettier" size={36} color={SiPrettierHex} />,
			<SiPortainer key="Portainer" size={36} color={SiPortainerHex} />,
			<SiTurborepo key="Turborepo" size={36} color={SiTurborepoHex} />,
			<SiNginx key="Nginx" size={36} color={SiNginxHex} />,
			<SiApache key="Apache" size={36} />,
			<SiDocker key="Docker" size={36} color={SiDockerHex} />,
			<SiLinux key="Linux" size={36} color={SiLinuxHex} />,
			<SiGnubash key="GnuBash" size={36} />,
			<SiVim key="Vim" size={36} color={SiVimHex} />,
			<SiNeovim key="Neovim" size={36} color={SiNeovimHex} />,
			<SiLua key="Lua" size={36} />,
			<SiPhpmyadmin key="PHPMyAdmin" size={36} color={SiPhpmyadminHex} />,
			<SiCloudflare key="Cloudflare" size={36} color={SiCloudflareHex} />,
			<SiVercel key="Vercel" size={36} />,
			<SiGodaddy key="GoDaddy" size={36} color={SiGodaddyHex} />,
			<SiCpanel key="CPanel" size={36} color={SiCpanelHex} />,
			<SiHostinger key="Hostinger" size={36} color={SiHostingerHex} />,
		],
	},
	{
		title: 'Security',
		description:
			'I learn cyber security on tryhackme.com and overthewire.org. I also have more practial experience protecting my own server.',
		technologies: [
			<SiBurpsuite key="BurpSuite" size={36} color={SiBurpsuiteHex} />,
			<SiMetasploit key="Metasploit" size={36} color={SiMetasploitHex} />,
			<SiLinux key="LinuxSecurity" size={36} color={SiLinuxHex} />,
			<SiOwasp key="OWASP" size={36} />,
		],
	},
	{
		title: 'Art & Design',
		description: '',
		technologies: [
			<SiFigma key="Figma" size={36} color={SiFigmaHex} />,
			<SiBlender key="Blender" size={36} color={SiBlenderHex} />,
			<SiThreedotjs key="ThreeJSDesign" size={36} />,
			<SiWebgl key="WebGLDesign" size={36} />,
		],
	},
	{
		title: 'Miscellaneous',
		description: '',
		technologies: [
			<SiRust key="Rust" size={36} />,
			<SiPython key="Python" size={36} color={SiPythonHex} />,
			<SiPostman key="Postman" size={36} color={SiPostmanHex} />,
			<SiInsomnia key="Insomnia" size={36} color={SiInsomniaHex} />,
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
								<SkillSetSection header={skill.title} key={skill.title}>
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
						<SkillSetSection header={skill.title} key={skill.title}>
							<p>{skill.description}</p>
							<ul className="flex flex-wrap gap-3">
								{skill.technologies.map((tech) => (
									<li key={tech.key}>{tech}</li>
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
