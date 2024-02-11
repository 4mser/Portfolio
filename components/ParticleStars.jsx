"use client";
import { MathUtils } from "three";
import { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Instances, Instance, Environment } from "@react-three/drei";
import { EffectComposer, N8AO, TiltShift2 } from "@react-three/postprocessing";

// Pre-cálculo de partículas para evitar recalculaciones innecesarias
const particles = Array.from({ length: 200 }, () => ({
  factor: MathUtils.randInt(50, 100),
  speed: MathUtils.randFloat(0.1, 0.75),
  xFactor: MathUtils.randFloatSpread(40),
  yFactor: MathUtils.randFloatSpread(40),
  zFactor: MathUtils.randFloatSpread(10),
}));

export default function ParticleStars() {
  return (
    <section className="w-full h-[100dvh]  left-0 top-0">
      <Canvas
        shadows
        dpr={[1, 2]}
        gl={{ antialias: false }}
        camera={{ fov: 100, position: [0, 0, 20] }}
      >
        <color attach="background" args={["#000000"]} />
        <fog attach="fog" args={["#5d666a", 40, -5]} />
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={1} castShadow />
        <Bubbles />
        <EffectComposer disableNormalPass>
          <N8AO aoRadius={3} intensity={2} color="green" />
          <TiltShift2 blur={0} />
        </EffectComposer>
        <Environment preset="city" />
      </Canvas>
    </section>
  );
}

function Bubbles() {
  const ref = useRef();
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.position.y = MathUtils.damp(
        ref.current.position.y,
        state.mouse.y * 5,
        2.75,
        delta
      );
      ref.current.rotation.y = MathUtils.damp(
        ref.current.rotation.y,
        (-state.mouse.x * Math.PI) / 2,
        2.75,
        delta
      );
    }
  });

  return (
    <Instances
      limit={particles.length}
      ref={ref}
      castShadow
      receiveShadow
      position={[0, 0, 0]}
    >
      <sphereGeometry args={[0.02, 10, 10]} />
      <meshStandardMaterial roughness={1} color="#eeeeee" />
      {particles.map((data, i) => (
        <Bubble key={i} {...data} />
      ))}
    </Instances>
  );
}

function Bubble({ factor, speed, xFactor, yFactor, zFactor }) {
  const ref = useRef();
  const accelerometer = useRef({ x: 0, y: 0, z: 0 });

  useEffect(() => {
    const handleOrientation = (event) => {
      accelerometer.current = {
        x: event.gamma / 5,
        y: event.beta / 5,
        z: event.alpha / 5,
      };
    };

    if (window.DeviceOrientationEvent) {
      window.addEventListener("deviceorientation", handleOrientation);
      return () =>
        window.removeEventListener("deviceorientation", handleOrientation);
    }
  }, []);

  useFrame((state) => {
    const t = factor + state.clock.elapsedTime * (speed / 3);
    if (ref.current) {
      ref.current.scale.setScalar(Math.max(1.5, Math.cos(t) * 3));
      ref.current.position.set(
        Math.cos(t) +
          Math.sin(t * 1) / 10 +
          xFactor +
          accelerometer.current.x +
          Math.cos((t / 10) * factor) +
          (Math.sin(t * 1) * factor) / 10,
        Math.sin(t) +
          Math.cos(t * 2) / 10 +
          yFactor +
          accelerometer.current.y +
          Math.sin((t / 10) * factor) +
          (Math.cos(t * 2) * factor) / 10,
        Math.sin(t) +
          Math.cos(t * 2) / 10 +
          zFactor +
          accelerometer.current.z +
          Math.cos((t / 10) * factor) +
          (Math.sin(t * 3) * factor) / 4
      );
    }
  });

  return <Instance ref={ref} />;
}
