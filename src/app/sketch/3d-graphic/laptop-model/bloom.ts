import { useEffect, useRef } from 'react'

import { extend, useFrame, useThree } from '@react-three/fiber'
import { Vector2 } from 'three'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js'

extend({ EffectComposer, RenderPass, UnrealBloomPass })

export function Bloom() {
	const { gl, scene, camera } = useThree()
	const composerRef = useRef<EffectComposer>()

	useEffect(() => {
		const composer = new EffectComposer(gl)
		composer.addPass(new RenderPass(scene, camera))

		const bloomPass = new UnrealBloomPass(new Vector2(200, 200), 0.3, 0.1, 0.9)
		composer.addPass(bloomPass)

		composerRef.current = composer
		composer.setSize(window.innerWidth, window.innerHeight)
	}, [gl, scene, camera])

	useFrame(() => {
		if (composerRef.current) {
			composerRef.current.render()
		}
	}, 1)

	return null
}
