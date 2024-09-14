import * as React from "react";
import * as THREE from "three";
import { Line } from "@react-three/drei";
import { ViewMode } from "./editor-context";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Sketch - Sokhuong",
	description:
		"Draw line, shape, and extrude shape in 3D using Three.js and React-three-fiber.",
};

type WheelShapeProps = {
	mode: ViewMode;
};

export const WheelShape = ({ mode }: WheelShapeProps) => {
	const points = React.useMemo(() => {
		const center = new THREE.Vector2();

		const point1 = new THREE.Vector2(-0.2, 0.501);
		const point2 = new THREE.Vector2(-1.1, 4);
		const point3 = new THREE.Vector2(1.1, 4);
		const point4 = new THREE.Vector2(0.2, 0.501);

		const controlPoint1 = new THREE.Vector2(0, 4.5);
		const controlPoint2 = new THREE.Vector2(0, 0.6);

		return {
			center,
			point1,
			point2,
			point3,
			point4,
			controlPoint1,
			controlPoint2,
		};
	}, []);

	const addHole = React.useCallback(
		(shape: THREE.Shape) => {
			const hole = new THREE.Path()
				// hole.autoClose = true
				// hole
				.moveTo(points.point1.x, points.point1.y)
				.lineTo(points.point2.x, points.point2.y)
				.quadraticCurveTo(
					points.controlPoint1.x,
					points.controlPoint1.y,
					points.point3.x,
					points.point3.y
				)
				.lineTo(points.point4.x, points.point4.y)
				.quadraticCurveTo(
					points.controlPoint2.x,
					points.controlPoint2.y,
					points.point1.x,
					points.point1.y
				);
			// hole.closePath()

			shape.holes.push(hole);
		},
		[points]
	);

	const rotatePoints = React.useCallback(() => {
		Object.values(points).map((point) => {
			point.rotateAround(new THREE.Vector2(), Math.PI / 3);
		});
	}, [points]);

	const wheelShape = React.useMemo(() => {
		const shape = new THREE.Shape()
			.moveTo(points.center.x, points.center.y)
			.arc(
				0,
				0,

				5,
				0,
				Math.PI * 2,
				false
			);
		shape.closePath();

		addHole(shape);

		rotatePoints();
		addHole(shape);

		rotatePoints();
		addHole(shape);

		rotatePoints();
		addHole(shape);

		rotatePoints();
		addHole(shape);

		rotatePoints();
		addHole(shape);

		return shape;
	}, [addHole, points, rotatePoints]);

	const extrudeGeometry = React.useMemo(() => {
		const geometry = new THREE.ExtrudeGeometry(wheelShape, {
			// bevelEnabled: true,
			// steps: 1,
			// curveSegments: 40,
			// depth: 1,
			// bevelSegments: 2,
			// bevelSize: 0.1,
			// bevelThickness: 0.1,
		});

		return geometry;
	}, [wheelShape]);

	return (
		<group>
			<mesh
				position={[0, 0, -1]}
				visible={mode === "extrude"}
				// @ts-ignore
				geometry={extrudeGeometry}
			>
				<meshStandardMaterial color={"darkgray"} />
				{/* <meshStandardMaterial wireframe /> */}
			</mesh>

			<mesh visible={mode === "shape"}>
				{/* 
					// @ts-ignore*/}
				<shapeGeometry args={[wheelShape, 12]} />
				<meshStandardMaterial side={THREE.DoubleSide} />
			</mesh>

			<group visible={mode === "line"}>
				{/* 
					// @ts-ignore*/}
				<Line color={"white"} points={wheelShape.getPoints(12)}></Line>

				{wheelShape.holes.map((hole, index) => (
					// @ts-ignore
					<Line color={"white"} key={index} points={hole.getPoints(2)}></Line>
				))}
			</group>

			<directionalLight position={[5, 5, 5]} />
			<directionalLight position={[5, 10, -5]} color="pink" />
			<ambientLight intensity={0.5} />
		</group>
	);
};
