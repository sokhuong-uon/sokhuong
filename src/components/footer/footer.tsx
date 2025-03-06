import { ComponentProps } from 'react'

import {
	SiGithub,
	SiTryhackme,
	SiYoutube,
} from '@icons-pack/react-simple-icons'

import { ThemeModeSwitcher } from '@/features/theme/components/theme-mode-switcher'
import { cn } from '@/lib/utils'

export function Footer({ className, ...props }: ComponentProps<'footer'>) {
	return (
		<footer {...props} className={cn('border-t border-muted py-4', className)}>
			<div className="flex items-center justify-between">
				<ul className="flex h-full items-center gap-2">
					<li className="h-10 w-10">
						<a
							href="https://github.com/sokhuong-uon"
							className="flex h-full w-full"
							target="_blank"
						>
							<SiGithub className="m-auto" />
						</a>
					</li>
					<li className="h-10 w-10">
						<a
							href="https://www.youtube.com/@alotofcode"
							className="flex h-full w-full"
							target="_blank"
						>
							<SiYoutube className="m-auto" />
						</a>
					</li>
					<li className="h-10 w-10">
						<a
							href="https://tryhackme.com/p/sokhuong"
							className="flex h-full w-full"
							target="_blank"
						>
							<SiTryhackme className="m-auto" />
						</a>
					</li>
				</ul>
				<ThemeModeSwitcher />
			</div>
		</footer>
	)
}
