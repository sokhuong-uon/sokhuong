import Link from 'next/link'

import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa'

import { Button } from '../ui/button'

export function Social() {
	return (
		<ul className="flex gap-2" aria-label="socials">
			<li>
				<Button asChild variant={'link'} size={'icon'}>
					<Link href="https://github.com/sokhuong-uon">
						<FaGithub className="h-6 w-6" />
						<span className="sr-only">Github profile</span>
					</Link>
				</Button>
			</li>
			<li>
				<Button asChild variant={'link'} size={'icon'}>
					<Link href="https://www.youtube.com/@alotofcode">
						<FaYoutube className="h-6 w-6" />
						<span className="sr-only">YouTube channel</span>
					</Link>
				</Button>
			</li>
			<li>
				<Button asChild variant={'link'} size={'icon'}>
					<Link href="https://www.linkedin.com/in/sokhuong-uon/">
						<FaLinkedin className="h-6 w-6" />
						<span className="sr-only">LinkedIn profile</span>
					</Link>
				</Button>
			</li>
		</ul>
	)
}
