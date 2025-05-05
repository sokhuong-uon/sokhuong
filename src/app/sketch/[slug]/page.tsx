export default async function SketchDetail({
	params,
}: {
	params: { slug: string };
}) {
	return (
		<main
			id="main"
			className="flex items-center justify-center w-full min-h-[calc(100dvh-10rem)]"
		>
			<p>
				Detail and explanation of the sketch: <b>{params.slug}</b>.
			</p>
		</main>
	);
}
