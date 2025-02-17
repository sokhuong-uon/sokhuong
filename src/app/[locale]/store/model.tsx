import { useGLTF } from '@react-three/drei'
import { PrimitiveProps, useFrame } from '@react-three/fiber'

type PrimitivePropsWithoutScene = Omit<PrimitiveProps, 'scene'>

export function Duck(props: PrimitivePropsWithoutScene) {
	const { scene } = useGLTF(
		'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/duck/model.gltf'
	)
	return <primitive object={scene} {...props} />
}

export function Candy(props: PrimitivePropsWithoutScene) {
	const { scene } = useGLTF(
		'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/candy-bucket/model.gltf'
	)
	useFrame((state, delta) => (scene.rotation.z = scene.rotation.y += delta))
	return <primitive object={scene} {...props} />
}

export function Flash(props: PrimitivePropsWithoutScene) {
	const { scene } = useGLTF(
		'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/lightning/model.gltf'
	)
	useFrame((state, delta) => (scene.rotation.y += delta))
	return <primitive object={scene} {...props} />
}

export function Apple(props: Omit<PrimitiveProps, 'scene'>) {
	const { scene } = useGLTF(
		'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/apple-half/model.gltf'
	)
	useFrame((state, delta) => (scene.rotation.y += delta))
	return <primitive object={scene} {...props} />
}

export function Target(props: PrimitivePropsWithoutScene) {
	const { scene } = useGLTF(
		'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf'
	)
	useFrame((state, delta) => (scene.rotation.y += delta))
	return <primitive object={scene} {...props} />
}
