"use client";
import React, { useContext } from "react";
import { ViewModeContext } from "./editor-context";
import { Button } from "@/components/ui/button";

export function ToggleViewMode() {
	const { viewMode, setViewMode } = useContext(ViewModeContext);
	return (
		<div>
			<div className="flex gap-2">
				<Button onClick={() => setViewMode("line")}>Line</Button>
				<Button onClick={() => setViewMode("shape")}>Solid</Button>
				<Button onClick={() => setViewMode("extrude")}>Extrude</Button>
			</div>
		</div>
	);
}
