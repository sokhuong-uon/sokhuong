import { createContext, Dispatch, SetStateAction } from "react";

export type ViewMode = "line" | "extrude" | "shape";

export const ViewModeContext = createContext<{
	viewMode: ViewMode;
	setViewMode: Dispatch<SetStateAction<ViewMode>>;
}>({ viewMode: "line", setViewMode: () => {} });
