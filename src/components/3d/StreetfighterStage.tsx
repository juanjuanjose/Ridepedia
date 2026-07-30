import { ContactShadows, Environment, OrbitControls, useGLTF } from '@react-three/drei'
import { Canvas, useThree } from '@react-three/fiber'
import { Suspense, useEffect, useLayoutEffect, useRef } from 'react'
import type { RefObject } from 'react'
import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib'
import { Box3, Group, MathUtils, PerspectiveCamera, Vector3 } from 'three'

interface StreetfighterStageProps {
  modelUrl: string
  interactive: boolean
  resetSignal: number
}

function FramedModel({
  modelUrl,
  controlsRef,
  interactive,
  resetSignal,
}: {
  modelUrl: string
  controlsRef: RefObject<OrbitControlsImpl>
  interactive: boolean
  resetSignal: number
}) {
  const gltf = useGLTF(modelUrl)
  const groupRef = useRef<Group>(null)
  const { camera, size } = useThree()

  useLayoutEffect(() => {
    const group = groupRef.current
    const controls = controlsRef.current

    if (!group || !controls) {
      return
    }

    group.updateWorldMatrix(true, true)

    const box = new Box3().setFromObject(group)
    const center = box.getCenter(new Vector3())
    const dimensions = box.getSize(new Vector3())

    group.position.sub(center)
    group.position.y += dimensions.y * 0.03

    const perspectiveCamera = camera as PerspectiveCamera
    const fov = MathUtils.degToRad(perspectiveCamera.fov)
    const fitHeightDistance = dimensions.y / (2 * Math.tan(fov / 2))
    const fitWidthDistance = dimensions.x / (2 * Math.tan(Math.atan(Math.tan(fov / 2) * perspectiveCamera.aspect)))
    const distance = Math.max(fitHeightDistance, fitWidthDistance) * 1.03 + dimensions.z * 0.46
    const verticalBias = dimensions.y * 0.025

    perspectiveCamera.position.set(distance * 0.84, verticalBias, distance * 0.9)
    perspectiveCamera.near = Math.max(distance / 100, 0.01)
    perspectiveCamera.far = distance * 20
    perspectiveCamera.updateProjectionMatrix()

    controls.target.set(0, dimensions.y * 0.045, 0)
    controls.minDistance = distance * 0.68
    controls.maxDistance = distance * 1.18
    controls.enablePan = false
    controls.enabled = interactive
    controls.saveState()
    controls.update()
  }, [camera, controlsRef, gltf.scene, interactive, modelUrl, size.height, size.width])

  useEffect(() => {
    const controls = controlsRef.current

    if (!controls) {
      return
    }

    controls.enabled = interactive
    controls.update()
  }, [controlsRef, interactive])

  useEffect(() => {
    const controls = controlsRef.current

    if (!controls) {
      return
    }

    controls.reset()
    controls.enabled = interactive
    controls.update()
  }, [controlsRef, interactive, resetSignal])

  useEffect(() => {
    gltf.scene.traverse((child) => {
      if ('castShadow' in child) {
        child.castShadow = true
      }

      if ('receiveShadow' in child) {
        child.receiveShadow = true
      }
    })
  }, [gltf.scene])

  return <primitive ref={groupRef} object={gltf.scene.clone(true)} />
}

function StageFallback() {
  return (
    <mesh>
      <boxGeometry args={[1.8, 0.35, 0.7]} />
      <meshStandardMaterial color="#6ee7f9" metalness={0.4} roughness={0.25} />
    </mesh>
  )
}

export default function StreetfighterStage({ modelUrl, interactive, resetSignal }: StreetfighterStageProps) {
  const controlsRef = useRef<OrbitControlsImpl>(null)

  return (
    <Canvas
      shadows
      dpr={[1, 1.8]}
      camera={{ fov: 36, near: 0.1, far: 100 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={1.5} />
      <directionalLight castShadow intensity={2.4} position={[5, 8, 6]} shadow-mapSize-width={2048} shadow-mapSize-height={2048} />
      <directionalLight intensity={0.8} position={[-4, 3, -4]} />

      <Suspense fallback={<StageFallback />}>
        <FramedModel
          modelUrl={modelUrl}
          controlsRef={controlsRef}
          interactive={interactive}
          resetSignal={resetSignal}
        />
        <Environment preset="city" />
      </Suspense>

      <ContactShadows position={[0, -1.3, 0]} opacity={0.52} scale={13} blur={2.2} far={4.2} resolution={512} />
      <OrbitControls ref={controlsRef} enabled={interactive} enableDamping dampingFactor={0.08} rotateSpeed={0.82} zoomSpeed={0.96} />
    </Canvas>
  )
}

useGLTF.preload('/motorcycles/2024-ducati-streetfighter-v4-s/source/2024%20Ducati%20StreetFighter%20V4%20S.glb')
