'use client'

import Link from 'next/link'
import { RefObject, useEffect, useRef, useState } from 'react'

import { DraftingCompassIcon, Plus } from 'lucide-react'
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from 'recharts'

import { Button } from '@/components/ui/button'
import {
	type ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from '@/components/ui/chart'

const chartData = [
	{ skill: 'Front-end', experience: 195 },
	{ skill: 'Back-end', experience: 125 },
	{ skill: 'CI/CD', experience: 150 },
	{ skill: 'Security', experience: 90 },
	{ skill: 'Design', experience: 75 },
]

const chartConfig = {
	experience: {
		label: 'Relative exp.',
		color: 'hsl(var(--chart-1))',
	},
} satisfies ChartConfig

export function SkillsRadar() {
	const containerRef = useRef(null)
	const [isResizing, setIsResizing] = useState(false)

	useEffect(() => {
		let resizeTimerId: NodeJS.Timeout | undefined

		const handleResize = () => {
			setIsResizing(true)

			if (resizeTimerId) {
				clearTimeout(resizeTimerId)
			}

			resizeTimerId = setTimeout(() => {
				setIsResizing(false)
			}, 300)
		}

		window.addEventListener('resize', handleResize)
		return () => {
			window.removeEventListener('resize', handleResize)
			if (resizeTimerId) {
				clearTimeout(resizeTimerId)
			}
		}
	}, [])

	return (
		<div className="relative" ref={containerRef}>
			<ChartContainer
				config={chartConfig}
				className="aspect-square w-[13rem] max-w-[64rem] xs:w-[15rem] sm:w-[30rem] md:w-[40rem] lg:w-[56rem]"
			>
				<RadarChart data={chartData}>
					<ChartTooltip
						cursor={false}
						content={<ChartTooltipContent indicator="line" />}
					/>
					<PolarAngleAxis
						dataKey="skill"
						className="text-xs sm:text-sm md:text-base"
					/>
					<PolarGrid />
					<Radar
						dataKey="experience"
						fill="hsl(var(--primary))"
						fillOpacity={0.25}
						stroke="hsl(var(--primary-foreground))"
						strokeOpacity={0.5}
						animationDuration={300}
					/>
				</RadarChart>
			</ChartContainer>

			<SkillExpandButtonGroup
				containerRef={containerRef}
				isResizing={isResizing}
			/>

			<Button
				asChild
				variant="outline"
				className="mx-auto mt-5 flex max-w-fit gap-3 uppercase"
			>
				<Link href="/sketch">
					<DraftingCompassIcon />
					<p>See my sketch</p>
				</Link>
			</Button>
		</div>
	)
}

function SkillExpandButtonGroup({
	containerRef,
	isResizing,
}: {
	containerRef: RefObject<HTMLDivElement>
	isResizing: boolean
}) {
	const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

	useEffect(() => {
		if (!containerRef.current) return

		const currentRef = containerRef.current

		const updateDimensions = () => {
			if (containerRef.current) {
				const chartElement =
					containerRef.current.querySelector('.recharts-wrapper')
				if (chartElement) {
					setDimensions({
						width: chartElement.clientWidth,
						height: chartElement.clientHeight,
					})
				}
			}
		}

		updateDimensions()

		const resizeObserver = new ResizeObserver(() => {
			requestAnimationFrame(updateDimensions)
		})

		if (containerRef.current) {
			resizeObserver.observe(containerRef.current)
		}

		return () => {
			if (currentRef) {
				resizeObserver.unobserve(currentRef)
			}
		}
	}, [containerRef])

	const maxExperience = Math.max(...chartData.map((d) => d.experience))

	return (
		<div className="pointer-events-none absolute inset-0">
			{dimensions.width > 0 &&
				chartData.map((item, index) => {
					const angle = (Math.PI * 2 * index) / chartData.length - Math.PI / 2

					const normalizedDistance = item.experience / maxExperience

					const centerX = dimensions.width / 2
					const centerY = dimensions.height / 2

					const radius = Math.min(centerX, centerY) * 0.75 * normalizedDistance
					const x = centerX + radius * Math.cos(angle)
					const y = centerY + radius * Math.sin(angle)

					return (
						<Button
							key={item.skill}
							size="sm"
							variant="outline"
							className={`pointer-events-auto absolute flex h-8 w-8 origin-center -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full bg-background p-0 opacity-60 shadow-sm transition-all hover:opacity-100 ${isResizing ? 'opacity-0' : ''} `}
							style={{
								left: `${x}px`,
								top: `${y}px`,
								transitionProperty: 'opacity, transform, left, top',
								transitionDuration: '300ms',
							}}
							asChild
						>
							<Link href={'/skill'}>
								<Plus />
							</Link>
						</Button>
					)
				})}
		</div>
	)
}
