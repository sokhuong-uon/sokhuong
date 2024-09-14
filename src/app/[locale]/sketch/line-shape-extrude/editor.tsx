"use client";

import { PropsWithChildren, useState } from "react";
import { ViewMode, ViewModeContext } from "./editor-context";

type EditorProps = PropsWithChildren<{}>;

export default function Editor({ children }: EditorProps) {
	const [viewMode, setViewMode] = useState<ViewMode>("line");
	return (
		<ViewModeContext.Provider value={{ viewMode, setViewMode }}>
			<div className="w-full h-auto aspect-video flex flex-col py-4 container relative">
				{children}
			</div>
		</ViewModeContext.Provider>
	);
}
