import { useRef } from "react";
import {
  PivotControls,
  TransformControls,
  OrbitControls,
  Html,
  Text,
  Float,
} from "@react-three/drei";

export default function Experience() {
  /**** Hooks  ****/

  const sphereRef = useRef();
  const cubeRef = useRef();

  /**** Render  ****/

  return (
    <>
      <OrbitControls makeDefault />

      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />
      <PivotControls
        anchor={[0, 0, 0]}
        depthTest={false}
        lineWidth={4}
        axisColors={["#9381ff", "#ff4d6d", "#7ae582"]}
        scale={0.7}>
        <mesh position-x={-2} ref={sphereRef}>
          <sphereGeometry />
          <meshStandardMaterial color="orange" />
          <Html
            position={[-1, 1, 0]}
            wrapperClass="label"
            center
            distanceFactor={8}
            occlude={[sphereRef, cubeRef]}>
            I am sphere
          </Html>
        </mesh>
      </PivotControls>
      <mesh position-x={2} scale={1} ref={cubeRef}>
        <boxGeometry />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>
      <TransformControls object={cubeRef} mode="translate" />
      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>
      <Float speed={5} floatIntensity={2}>
        <Text
          font="./bangers-v20-latin-regular.woff"
          color={"salmon"}
          fontSize={0.8}
          position={[0, 2, 0]}
          textAlign="center">
          I am text and floating.
        </Text>
      </Float>
    </>
  );
}
