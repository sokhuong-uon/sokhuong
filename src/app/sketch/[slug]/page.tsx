export default async function SketchDetail(
    props: {
        params: Promise<{ slug: string }>
    }
) {
    const params = await props.params;
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
