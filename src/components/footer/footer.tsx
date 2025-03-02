import { ComponentProps } from 'react'

import { Github } from '@/components/icon/github'
import { YouTube } from '@/components/icon/youtube'
import { Button } from '@/components/ui/button'
import { ThemeModeSwitcher } from '@/features/theme/components/theme-mode-switcher'
import { cn } from '@/lib/utils'

export function Footer({ className, ...props }: ComponentProps<'footer'>) {
	return (
		<footer {...props} className={cn('border-t border-muted py-4', className)}>
			<div className="flex items-center justify-between">
				<ul className="flex h-full items-center">
					<li>
						<a href="https://github.com/sokhuong-uon">
							<Button asChild variant="ghost">
								<Github />
							</Button>
						</a>
					</li>
					<li>
						<a href="https://www.youtube.com/@alotofcode">
							<Button asChild variant="ghost">
								<YouTube />
							</Button>
						</a>
					</li>
				</ul>
				<ThemeModeSwitcher />
			</div>
		</footer>
	)
}
