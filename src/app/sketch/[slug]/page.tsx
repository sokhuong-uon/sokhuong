export default async function SketchDetail({
	params,
}: {
	params: { slug: string }
}) {
	return (
		<main
			id="main"
			className="flex min-h-[calc(100dvh-10rem)] w-full items-center justify-center"
		>
			<p>
				Detail and explanation of the sketch: <b>{params.slug}</b>.
			</p>
		</main>
	)
}
