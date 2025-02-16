import {
	Environment,
	View,
	EnvironmentProps,
	ViewProps,
	PerspectiveCamera,
} from "@react-three/drei";
import { PropsWithChildren } from "react";

import * as THREE from "three";

type SceneViewProps = PropsWithChildren<{
	environment?: boolean;
	viewProps?: ViewProps;
	environmentProps?: EnvironmentProps;
	backgroundColor?:
		| THREE.ColorRepresentation
		| [r: number, g: number, b: number];
}>;

export function SceneView({
	environment,
	viewProps,
	environmentProps = { preset: "dawn" },
	backgroundColor,
	children,
}: SceneViewProps) {
	return (
		<View style={{ width: "100%", height: "100%" }} {...viewProps}>
			{environment && <Environment {...environmentProps} />}

			{backgroundColor && (
				<color
					attach="background"
					args={[
						backgroundColor as Exclude<THREE.ColorRepresentation, THREE.Color>,
					]}
				/>
			)}
			<ambientLight intensity={0.5} />
			<pointLight position={[20, 30, 10]} intensity={1} />
			<pointLight position={[-10, -10, -10]} color="blue" />

			<PerspectiveCamera makeDefault fov={40} position={[0, 0, 6]} />

			{children}
		</View>
	);
}
