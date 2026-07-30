import { mkdir, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import * as THREE from 'three'
import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter.js'

class NodeFileReader {
  constructor() {
    this.result = null
    this.onloadend = null
  }

  async readAsArrayBuffer(blob) {
    this.result = await blob.arrayBuffer()

    if (this.onloadend) {
      this.onloadend()
    }
  }
}

globalThis.FileReader = NodeFileReader

function createWheel(material) {
  const wheel = new THREE.Group()
  const tire = new THREE.Mesh(new THREE.TorusGeometry(0.56, 0.12, 24, 64), material)
  tire.rotation.y = Math.PI / 2

  const rim = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.42, 0.14, 32), new THREE.MeshStandardMaterial({ color: '#cbd5e1', metalness: 0.8, roughness: 0.26 }))
  rim.rotation.z = Math.PI / 2

  wheel.add(tire, rim)
  return wheel
}

function createTube(length, color) {
  return new THREE.Mesh(
    new THREE.CylinderGeometry(0.055, 0.055, length, 16),
    new THREE.MeshStandardMaterial({ color, metalness: 0.45, roughness: 0.34 }),
  )
}

function createMotorcycleScene({ bodyColor, tankScaleY, seatHeight, forkHeight, rearExtension }) {
  const scene = new THREE.Scene()
  const bike = new THREE.Group()

  const darkMaterial = new THREE.MeshStandardMaterial({ color: '#0f172a', metalness: 0.65, roughness: 0.28 })
  const bodyMaterial = new THREE.MeshStandardMaterial({ color: bodyColor, metalness: 0.52, roughness: 0.25 })

  const frontWheel = createWheel(darkMaterial)
  frontWheel.position.set(2.3, 0.62, 0)

  const rearWheel = createWheel(darkMaterial)
  rearWheel.position.set(-2.25, 0.62, 0)

  const frame = createTube(2.65, '#475569')
  frame.rotation.z = Math.PI / 2.9
  frame.position.set(-0.1, 1.58, 0)

  const swingarm = createTube(1.55, '#1e293b')
  swingarm.rotation.z = -Math.PI / 3.2
  swingarm.position.set(-1.45, 1.28, 0)

  const forkLeft = createTube(forkHeight, '#cbd5e1')
  forkLeft.rotation.z = Math.PI / 10
  forkLeft.position.set(1.7, 1.88, 0.16)

  const forkRight = forkLeft.clone()
  forkRight.position.z = -0.16

  const engine = new THREE.Mesh(new THREE.BoxGeometry(0.98, 0.72, 0.88), darkMaterial)
  engine.position.set(-0.22, 1.22, 0)

  const tank = new THREE.Mesh(new THREE.CapsuleGeometry(0.46, 1.08, 10, 18), bodyMaterial)
  tank.rotation.z = Math.PI / 2
  tank.scale.y = tankScaleY
  tank.position.set(0.35, 2.02, 0)

  const seat = new THREE.Mesh(new THREE.BoxGeometry(1.16, 0.18, 0.52), new THREE.MeshStandardMaterial({ color: '#111827', metalness: 0.18, roughness: 0.76 }))
  seat.position.set(-0.78, seatHeight, 0)
  seat.rotation.z = -Math.PI / 24

  const tail = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.22, 0.3), bodyMaterial)
  tail.position.set(-1.52 - rearExtension, seatHeight + 0.16, 0)
  tail.rotation.z = -Math.PI / 8

  const head = new THREE.Mesh(new THREE.BoxGeometry(0.54, 0.3, 0.42), bodyMaterial)
  head.position.set(1.7, 2.22, 0)
  head.rotation.z = Math.PI / 8

  const handlebar = createTube(0.78, '#94a3b8')
  handlebar.rotation.z = Math.PI / 2
  handlebar.position.set(1.28, 2.4, 0)

  const exhaust = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.14, 1.1, 16), new THREE.MeshStandardMaterial({ color: '#94a3b8', metalness: 0.8, roughness: 0.22 }))
  exhaust.rotation.z = Math.PI / 2.7
  exhaust.position.set(-0.5, 1.02, 0.52)

  const beak = new THREE.Mesh(new THREE.BoxGeometry(0.65, 0.12, 0.22), bodyMaterial)
  beak.position.set(2.15, 2.02, 0)
  beak.rotation.z = -Math.PI / 6

  const belly = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.12, 0.64), bodyMaterial)
  belly.position.set(0.1, 0.78, 0)
  belly.rotation.z = Math.PI / 40

  bike.add(
    frontWheel,
    rearWheel,
    frame,
    swingarm,
    forkLeft,
    forkRight,
    engine,
    tank,
    seat,
    tail,
    head,
    handlebar,
    exhaust,
    beak,
    belly,
  )

  bike.position.y = -0.62
  scene.add(bike)
  return scene
}

async function exportScene(scene, outputPath) {
  const exporter = new GLTFExporter()
  const arrayBuffer = await new Promise((resolveExport, rejectExport) => {
    exporter.parse(scene, resolveExport, rejectExport, { binary: true, onlyVisible: true })
  })

  await mkdir(dirname(outputPath), { recursive: true })
  await writeFile(outputPath, Buffer.from(arrayBuffer))
}

async function main() {
  const root = resolve(process.cwd(), 'public', 'motorcycles')

  await exportScene(
    createMotorcycleScene({ bodyColor: '#ef4444', tankScaleY: 1.18, seatHeight: 2.14, forkHeight: 1.68, rearExtension: 0.06 }),
    resolve(root, 'ducati-streetfighter-v4.glb'),
  )

  await exportScene(
    createMotorcycleScene({ bodyColor: '#22c55e', tankScaleY: 1.34, seatHeight: 2.3, forkHeight: 1.92, rearExtension: 0.3 }),
    resolve(root, 'bmw-r1300gs.glb'),
  )
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
