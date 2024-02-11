import React, { useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { CircleGeometry, MeshBasicMaterial, Mesh } from "three";

const Orbit = () => {
  // Geometría para el círculo de la órbita
  const geometry = useMemo(() => new CircleGeometry(5, 64), []);
  // Material blanco para la órbita
  const material = useMemo(
    () =>
      new MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.5,
      }),
    []
  );

  return <mesh geometry={geometry} material={material} />;
};

const OrbitingCircle = ({ activeIndex, totalSlides }) => {
  // Calcula la posición del círculo que orbita basado en el índice activo
  const angle = useMemo(
    () => ((2 * Math.PI) / totalSlides) * activeIndex,
    [activeIndex, totalSlides]
  );
  const position = useMemo(
    () => [Math.cos(angle) * 5, Math.sin(angle) * 5, 0],
    [angle]
  );

  // Geometría y material blanco para el círculo que orbita
  const geometry = useMemo(() => new CircleGeometry(0.5, 32), []);
  const material = useMemo(
    () => new MeshBasicMaterial({ color: 0xffffff }),
    []
  );

  return <mesh position={position} geometry={geometry} material={material} />;
};

const OrbitCounter = ({ activeIndex, totalSlides }) => {
  return (
    <Canvas style={{ height: "100vh", width: "100vw" }}>
      <ambientLight intensity={0.5} />
      <Orbit />
      <OrbitingCircle activeIndex={activeIndex} totalSlides={totalSlides} />
    </Canvas>
  );
};

export default OrbitCounter;
