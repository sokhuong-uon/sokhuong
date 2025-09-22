export default function Loading() {
	return (
		<div className="relative flex h-96 flex-col border border-muted sm:h-[40rem]">
			<div className="flex h-12 items-center justify-center border-b border-muted">
				<div className="text-sm text-muted-foreground">
					Loading 3D Editor...
				</div>
			</div>

			<div className="flex flex-1 items-center justify-center bg-muted/10">
				<div className="text-center">
					<div className="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent"></div>
					<div className="text-sm text-muted-foreground">
						Initializing 3D Scene
					</div>
				</div>
			</div>
		</div>
	)
}
