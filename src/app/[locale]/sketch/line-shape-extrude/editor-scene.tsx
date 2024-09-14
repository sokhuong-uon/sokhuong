"use client";
import { Canvas } from "@react-three/fiber";
import React, { useContext } from "react";
import { WheelShape } from "./sheel-shape";
import { OrbitControls } from "@react-three/drei";
import { ViewModeContext } from "./editor-context";

export function EditorScene() {
	const { viewMode } = useContext(ViewModeContext);
	return (
		<Canvas className="w-full aspect-video bg-zinc-900 relative">
			<WheelShape mode={viewMode} />
			<OrbitControls />
		</Canvas>
	);
}
