import * as THREE from 'three'

export function createBox() {
	const geometry = new THREE.BoxGeometry(1, 1, 1, 1, 1, 1)
	const material = new THREE.MeshStandardMaterial()

	const mesh = new THREE.Mesh(geometry, material)
	mesh.name = 'Box'

	return mesh
}

export function createCapsule() {
	const geometry = new THREE.CapsuleGeometry(1, 1, 4, 8)
	const material = new THREE.MeshStandardMaterial()

	const mesh = new THREE.Mesh(geometry, material)
	mesh.name = 'Capsule'

	return mesh
}

export function createCircle() {
	const geometry = new THREE.CircleGeometry(1, 32, 0, Math.PI * 2)
	const material = new THREE.MeshStandardMaterial()

	const mesh = new THREE.Mesh(geometry, material)
	mesh.name = 'Circle'

	return mesh
}

export function createCylinder() {
	const geometry = new THREE.CylinderGeometry(
		1,
		1,
		1,
		32,
		1,
		false,
		0,
		Math.PI * 2
	)
	const material = new THREE.MeshStandardMaterial()

	const mesh = new THREE.Mesh(geometry, material)
	mesh.name = 'Cylinder'

	return mesh
}

export function createDodecahedron() {
	const geometry = new THREE.DodecahedronGeometry(1, 0)
	const material = new THREE.MeshStandardMaterial()

	const mesh = new THREE.Mesh(geometry, material)
	mesh.name = 'Dodecahedron'

	return mesh
}

export function createIcosahedron() {
	const geometry = new THREE.IcosahedronGeometry(1, 0)
	const material = new THREE.MeshStandardMaterial()

	const mesh = new THREE.Mesh(geometry, material)
	mesh.name = 'Icosahedron'

	return mesh
}

export function createLathe() {
	const geometry = new THREE.LatheGeometry()
	const material = new THREE.MeshStandardMaterial({ side: THREE.DoubleSide })

	const mesh = new THREE.Mesh(geometry, material)
	mesh.name = 'Lathe'

	return mesh
}

export function createOctahedron() {
	const geometry = new THREE.OctahedronGeometry(1, 0)
	const material = new THREE.MeshStandardMaterial()

	const mesh = new THREE.Mesh(geometry, material)
	mesh.name = 'Octahedron'

	return mesh
}

export function createPlane() {
	const geometry = new THREE.PlaneGeometry(1, 1, 1, 1)
	const material = new THREE.MeshStandardMaterial()

	const mesh = new THREE.Mesh(geometry, material)
	mesh.name = 'Plane'

	return mesh
}

export function createRing() {
	const geometry = new THREE.RingGeometry(0.5, 1, 32, 1, 0, Math.PI * 2)
	const material = new THREE.MeshStandardMaterial()

	const mesh = new THREE.Mesh(geometry, material)
	mesh.name = 'Ring'

	return mesh
}

export function createSphere() {
	const geometry = new THREE.SphereGeometry(
		1,
		32,
		16,
		0,
		Math.PI * 2,
		0,
		Math.PI
	)
	const material = new THREE.MeshStandardMaterial()

	const mesh = new THREE.Mesh(geometry, material)
	mesh.name = 'Sphere'

	return mesh
}

export function createSprite() {
	const material = new THREE.SpriteMaterial()

	const sprite = new THREE.Sprite(material)
	sprite.name = 'Sprite'

	return sprite
}

export function createTetrahedron() {
	const geometry = new THREE.TetrahedronGeometry(1, 0)
	const material = new THREE.MeshStandardMaterial()

	const mesh = new THREE.Mesh(geometry, material)
	mesh.name = 'Tetrahedron'

	return mesh
}

export function createTorus() {
	const geometry = new THREE.TorusGeometry(1, 0.4, 12, 48, Math.PI * 2)
	const material = new THREE.MeshStandardMaterial()

	const mesh = new THREE.Mesh(geometry, material)
	mesh.name = 'Torus'

	return mesh
}

export function createTorusKnot() {
	const geometry = new THREE.TorusKnotGeometry(1, 0.4, 64, 8, 2, 3)
	const material = new THREE.MeshStandardMaterial()

	const mesh = new THREE.Mesh(geometry, material)
	mesh.name = 'TorusKnot'

	return mesh
}

export function createTube() {
	const path = new THREE.CatmullRomCurve3([
		new THREE.Vector3(2, 2, -2),
		new THREE.Vector3(2, -2, -0.6666666666666667),
		new THREE.Vector3(-2, -2, 0.6666666666666667),
		new THREE.Vector3(-2, 2, 2),
	])

	const geometry = new THREE.TubeGeometry(path, 64, 1, 8, false)
	const material = new THREE.MeshStandardMaterial()

	const mesh = new THREE.Mesh(geometry, material)
	mesh.name = 'Tube'

	return mesh
}
