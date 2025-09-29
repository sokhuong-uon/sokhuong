import { useMemo } from 'react'

import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

type GLTFResult = {
	nodes: {
		backSideOfTheLid: THREE.Mesh
		frontSideOfTheLid: THREE.Mesh
		laptopScreen001: THREE.Mesh
		backlight: THREE.Mesh
		powerButton001: THREE.Mesh
		keyCover: THREE.Mesh
		caseTop001: THREE.Mesh
		indicatorLightsSupportBump001: THREE.Mesh
		operationIndicator: THREE.Mesh
		chargingIndicator: THREE.Mesh
		diskIndicator: THREE.Mesh
		airplanModeIndicator: THREE.Mesh
		powerButtonLight001: THREE.Mesh
		bottomPartOfTheCase: THREE.Mesh
		honeycombLayout: THREE.Mesh
		touchpad001: THREE.Mesh
		touchpadRightClickButton001: THREE.Mesh
		touchpadLeftClickButton001: THREE.Mesh
		outerPartOfPorts: THREE.Mesh
		innerPartOfPorts: THREE.Mesh
	}
}

export function Model(props: React.JSX.IntrinsicElements['group']) {
	const { nodes } = useGLTF(
		'/tuf-laptop-optimized.glb'
	) as unknown as GLTFResult

	const keyboardBackLightBloomMaterial = useMemo(() => {
		return new THREE.MeshStandardMaterial({
			color: new THREE.Color(0.2, 0.4, 1),
			emissive: new THREE.Color(0, 0.5, 2),
			emissiveIntensity: 3,
			toneMapped: false,
			transparent: true,
			opacity: 0.8,
		})
	}, [])

	const screenMaterial = useMemo(() => {
		return new THREE.MeshStandardMaterial({
			color: new THREE.Color('pink'),
			emissive: new THREE.Color(0.1, 0.2, 0.8),
			emissiveIntensity: 1.2,
			toneMapped: false,
		})
	}, [])

	const indicatorMaterial = useMemo(() => {
		return new THREE.MeshStandardMaterial({
			color: new THREE.Color(1, 1, 1),
			emissive: new THREE.Color(0, 1, 2),
			emissiveIntensity: 1.8,
			toneMapped: false,
		})
	}, [])

	const plasticMaterial = useMemo(() => {
		return new THREE.MeshStandardMaterial({
			color: 'black',
			roughness: 1,
			metalness: 0.05,
			side: THREE.DoubleSide,
		})
	}, [])

	const backLidMaterial = useMemo(() => {
		return new THREE.MeshStandardMaterial({
			color: '#808080',
			roughness: 1,
			metalness: 0.05,
			side: THREE.DoubleSide,
		})
	}, [])

	return (
		<group {...props} dispose={null}>
			<group position={[-0.177, -0.006, -0.073]} rotation={[-0.1, 0, 0]}>
				<mesh
					geometry={nodes.backSideOfTheLid.geometry}
					material={backLidMaterial}
					position={[0.164, 0.117, -0.009]}
				/>
				<mesh
					geometry={nodes.frontSideOfTheLid.geometry}
					material={plasticMaterial}
					position={[0.162, 0.244, -0.008]}
				/>
				<mesh
					geometry={nodes.laptopScreen001.geometry}
					material={screenMaterial}
					position={[0.164, 0.117, -0.009]}
				/>
			</group>

			<mesh
				geometry={nodes.backlight.geometry}
				material={keyboardBackLightBloomMaterial}
				position={[-0.118, -0.002, 0.025]}
			/>

			<mesh
				geometry={nodes.powerButton001.geometry}
				material={nodes.powerButton001.material}
				position={[0.142, -0.003, -0.045]}
			/>
			<mesh
				geometry={nodes.keyCover.geometry}
				material={plasticMaterial}
				position={[-0.054, -0.002, 0.061]}
			/>
			<mesh
				geometry={nodes.caseTop001.geometry}
				material={plasticMaterial}
				position={[-0.014, -0.007, 0.045]}
			>
				<mesh
					geometry={nodes.indicatorLightsSupportBump001.geometry}
					material={plasticMaterial}
					position={[-0.037, 0.006, -0.121]}
				/>
			</mesh>

			<mesh
				geometry={nodes.operationIndicator.geometry}
				material={indicatorMaterial}
				position={[-0.056, -0.0, -0.075]}
			/>
			<mesh
				geometry={nodes.chargingIndicator.geometry}
				material={nodes.chargingIndicator.material}
				position={[-0.048, -0.001, -0.076]}
			/>
			<mesh
				geometry={nodes.diskIndicator.geometry}
				material={nodes.diskIndicator.material}
				position={[-0.041, -0.001, -0.076]}
			/>
			<mesh
				geometry={nodes.airplanModeIndicator.geometry}
				material={nodes.airplanModeIndicator.material}
				position={[-0.034, -0.001, -0.076]}
			/>
			<mesh
				geometry={nodes.powerButtonLight001.geometry}
				material={nodes.powerButtonLight001.material}
				position={[0.142, -0.002, -0.049]}
			/>

			<mesh
				geometry={nodes.bottomPartOfTheCase.geometry}
				material={plasticMaterial}
				position={[-0.013, -0.015, 0.045]}
			>
				<mesh
					geometry={nodes.honeycombLayout.geometry}
					material={nodes.honeycombLayout.material}
					position={[-0.004, -0.004, -0.028]}
				/>
			</mesh>
			<mesh
				geometry={nodes.touchpad001.geometry}
				material={plasticMaterial}
				position={[-0.036, -0.002, 0.115]}
			/>
			<mesh
				geometry={nodes.touchpadRightClickButton001.geometry}
				material={plasticMaterial}
				position={[-0.011, -0.002, 0.151]}
			/>
			<mesh
				geometry={nodes.touchpadLeftClickButton001.geometry}
				material={plasticMaterial}
				position={[-0.061, -0.002, 0.151]}
			/>
			<mesh
				geometry={nodes.outerPartOfPorts.geometry}
				material={nodes.outerPartOfPorts.material}
				position={[0.151, -0.012, 0.069]}
			/>
			<mesh
				geometry={nodes.innerPartOfPorts.geometry}
				material={plasticMaterial}
				position={[0.151, -0.011, 0.069]}
			/>
		</group>
	)
}

useGLTF.preload('/tuf-laptop-optimized.glb')
