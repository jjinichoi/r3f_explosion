/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/model/heart.glb -o src/components/Heart.jsx -r public -k 
Heart by Quaternius (https://poly.pizza/m/1yCRUwFnwX)
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useExplode } from "../hooks/useExplode";

export function Heart(props) {
  const { nodes, materials } = useGLTF("/model/heart.glb");
  const group = useRef();

  useExplode(group, { distance: 30, enableRotation: true });

  return (
    <group {...props} dispose={null} ref={group}>
      <mesh
        name="Heart_Full_cell"
        geometry={nodes.Heart_Full_cell.geometry}
        material={materials["Red.001"]}
        position={[5.188, 1.248, -0.703]}
      />
      <mesh
        name="Heart_Full_cell002"
        geometry={nodes.Heart_Full_cell002.geometry}
        material={materials["Red.001"]}
        position={[-4.77, -1.207, 1.598]}
      />
      <mesh
        name="Heart_Full_cell003"
        geometry={nodes.Heart_Full_cell003.geometry}
        material={materials["Red.001"]}
        position={[-0.422, 1.659, 1.432]}
      />
      <mesh
        name="Heart_Full_cell004"
        geometry={nodes.Heart_Full_cell004.geometry}
        material={materials["Red.001"]}
        position={[-1.826, 2.276, -2.05]}
      />
      <mesh
        name="Heart_Full_cell005"
        geometry={nodes.Heart_Full_cell005.geometry}
        material={materials["Red.001"]}
        position={[1.226, 0.039, 0.659]}
      />
      <mesh
        name="Heart_Full_cell006"
        geometry={nodes.Heart_Full_cell006.geometry}
        material={materials["Red.001"]}
        position={[-3.495, 2.705, -1.288]}
      />
      <mesh
        name="Heart_Full_cell007"
        geometry={nodes.Heart_Full_cell007.geometry}
        material={materials["Red.001"]}
        position={[3.293, -2.383, -1.955]}
      />
      <mesh
        name="Heart_Full_cell008"
        geometry={nodes.Heart_Full_cell008.geometry}
        material={materials["Red.001"]}
        position={[-2.727, -1.275, 1.875]}
      />
      <mesh
        name="Heart_Full_cell009"
        geometry={nodes.Heart_Full_cell009.geometry}
        material={materials["Red.001"]}
        position={[-1.75, -0.531, -2.743]}
      />
      <mesh
        name="Heart_Full_cell010"
        geometry={nodes.Heart_Full_cell010.geometry}
        material={materials["Red.001"]}
        position={[4.912, -0.849, -0.438]}
      />
      <mesh
        name="Heart_Full_cell011"
        geometry={nodes.Heart_Full_cell011.geometry}
        material={materials["Red.001"]}
        position={[-4.753, 0.108, -1.817]}
      />
      <mesh
        name="Heart_Full_cell012"
        geometry={nodes.Heart_Full_cell012.geometry}
        material={materials["Red.001"]}
        position={[-0.03, -1.26, 2.525]}
      />
      <mesh
        name="Heart_Full_cell013"
        geometry={nodes.Heart_Full_cell013.geometry}
        material={materials["Red.001"]}
        position={[1.615, -1.031, -2.004]}
      />
      <mesh
        name="Heart_Full_cell014"
        geometry={nodes.Heart_Full_cell014.geometry}
        material={materials["Red.001"]}
        position={[-4.272, 0.398, 1.076]}
      />
      <mesh
        name="Heart_Full_cell016"
        geometry={nodes.Heart_Full_cell016.geometry}
        material={materials["Red.001"]}
        position={[2.62, 1.424, -2.401]}
      />
      <mesh
        name="Heart_Full_cell017"
        geometry={nodes.Heart_Full_cell017.geometry}
        material={materials["Red.001"]}
        position={[1.224, 2.284, 0.747]}
      />
      <mesh
        name="Heart_Full_cell018"
        geometry={nodes.Heart_Full_cell018.geometry}
        material={materials["Red.001"]}
        position={[-4.423, 1.893, -0.641]}
      />
      <mesh
        name="Heart_Full_cell021"
        geometry={nodes.Heart_Full_cell021.geometry}
        material={materials["Red.001"]}
        position={[-1.979, 1.262, 1.33]}
      />
      <mesh
        name="Heart_Full_cell023"
        geometry={nodes.Heart_Full_cell023.geometry}
        material={materials["Red.001"]}
        position={[4.943, 1.267, -1.52]}
      />
      <mesh
        name="Heart_Full_cell024"
        geometry={nodes.Heart_Full_cell024.geometry}
        material={materials["Red.001"]}
        position={[-0.427, -1.61, -0.467]}
      />
      <mesh
        name="Heart_Full_cell026"
        geometry={nodes.Heart_Full_cell026.geometry}
        material={materials["Red.001"]}
        position={[2.491, -2.245, 2.443]}
      />
      <mesh
        name="Heart_Full_cell027"
        geometry={nodes.Heart_Full_cell027.geometry}
        material={materials["Red.001"]}
        position={[-4.936, -1.395, -0.254]}
      />
      <mesh
        name="Heart_Full_cell028"
        geometry={nodes.Heart_Full_cell028.geometry}
        material={materials["Red.001"]}
        position={[4.068, -0.574, 2.487]}
      />
      <mesh
        name="Heart_Full_cell029"
        geometry={nodes.Heart_Full_cell029.geometry}
        material={materials["Red.001"]}
        position={[4.4, 2.377, 0.052]}
      />
      <mesh
        name="Heart_Full_cell030"
        geometry={nodes.Heart_Full_cell030.geometry}
        material={materials["Red.001"]}
        position={[-0.287, 1.415, -1.398]}
      />
      <mesh
        name="Heart_Full_cell031"
        geometry={nodes.Heart_Full_cell031.geometry}
        material={materials["Red.001"]}
        position={[-2.355, -2.378, 2.68]}
      />
      <mesh
        name="Heart_Full_cell032"
        geometry={nodes.Heart_Full_cell032.geometry}
        material={materials["Red.001"]}
        position={[3.184, 2.043, -0.527]}
      />
      <mesh
        name="Heart_Full_cell033"
        geometry={nodes.Heart_Full_cell033.geometry}
        material={materials["Red.001"]}
        position={[-2.16, 2.785, -0.165]}
      />
      <mesh
        name="Heart_Full_cell034"
        geometry={nodes.Heart_Full_cell034.geometry}
        material={materials["Red.001"]}
        position={[4.473, 0.673, 1.5]}
      />
      <mesh
        name="Heart_Full_cell035"
        geometry={nodes.Heart_Full_cell035.geometry}
        material={materials["Red.001"]}
        position={[-2.932, 0.447, 3.024]}
      />
      <mesh
        name="Heart_Full_cell036"
        geometry={nodes.Heart_Full_cell036.geometry}
        material={materials["Red.001"]}
        position={[-3.125, -0.76, -1.572]}
      />
      <mesh
        name="Heart_Full_cell037"
        geometry={nodes.Heart_Full_cell037.geometry}
        material={materials["Red.001"]}
        position={[2.722, 0.077, 3.067]}
      />
      <mesh
        name="Heart_Full_cell038"
        geometry={nodes.Heart_Full_cell038.geometry}
        material={materials["Red.001"]}
        position={[3.701, -1.975, 0.584]}
      />
      <mesh
        name="Heart_Full_cell039"
        geometry={nodes.Heart_Full_cell039.geometry}
        material={materials["Red.001"]}
        position={[-1.857, -4.21, 0.045]}
      />
      <mesh
        name="Heart_Full_cell041"
        geometry={nodes.Heart_Full_cell041.geometry}
        material={materials["Red.001"]}
        position={[-3.078, -2.502, -1.364]}
      />
      <mesh
        name="Heart_Full_cell042"
        geometry={nodes.Heart_Full_cell042.geometry}
        material={materials["Red.001"]}
        position={[-5.309, 0.351, 0.112]}
      />
      <mesh
        name="Heart_Full_cell043"
        geometry={nodes.Heart_Full_cell043.geometry}
        material={materials["Red.001"]}
        position={[1.872, -3.902, 0.972]}
      />
      <mesh
        name="Heart_Full_cell044"
        geometry={nodes.Heart_Full_cell044.geometry}
        material={materials["Red.001"]}
        position={[-0.864, -1.919, -2.489]}
      />
      <mesh
        name="Heart_Full_cell045"
        geometry={nodes.Heart_Full_cell045.geometry}
        material={materials["Red.001"]}
        position={[3.101, 2.176, 2.116]}
      />
      <mesh
        name="Heart_Full_cell046"
        geometry={nodes.Heart_Full_cell046.geometry}
        material={materials["Red.001"]}
        position={[1.773, -4.111, -1.204]}
      />
      <mesh
        name="Heart_Full_cell047"
        geometry={nodes.Heart_Full_cell047.geometry}
        material={materials["Red.001"]}
        position={[0.245, -3.718, -1.675]}
      />
      <mesh
        name="Heart_Full_cell048"
        geometry={nodes.Heart_Full_cell048.geometry}
        material={materials["Red.001"]}
        position={[1.949, 0.652, 2.314]}
      />
      <mesh
        name="Heart_Full_cell049"
        geometry={nodes.Heart_Full_cell049.geometry}
        material={materials["Red.001"]}
        position={[-3.898, -2.847, 1.013]}
      />
      <mesh
        name="Heart_Full_cell051"
        geometry={nodes.Heart_Full_cell051.geometry}
        material={materials["Red.001"]}
        position={[-3.968, 2.787, -0.454]}
      />
      <mesh
        name="Heart_Full_cell053"
        geometry={nodes.Heart_Full_cell053.geometry}
        material={materials["Red.001"]}
        position={[-2.986, 1.468, -1.982]}
      />
      <mesh
        name="Heart_Full_cell054"
        geometry={nodes.Heart_Full_cell054.geometry}
        material={materials["Red.001"]}
        position={[-0.143, -4.476, 1.245]}
      />
      <mesh
        name="Heart_Full_cell055"
        geometry={nodes.Heart_Full_cell055.geometry}
        material={materials["Red.001"]}
        position={[5.613, -0.026, -1.094]}
      />
      <mesh
        name="Heart_Full_cell056"
        geometry={nodes.Heart_Full_cell056.geometry}
        material={materials["Red.001"]}
        position={[-4.107, -0.905, 2.56]}
      />
      <mesh
        name="Heart_Full_cell057"
        geometry={nodes.Heart_Full_cell057.geometry}
        material={materials["Red.001"]}
        position={[-4.082, 2.174, 1.214]}
      />
      <mesh
        name="Heart_Full_cell058"
        geometry={nodes.Heart_Full_cell058.geometry}
        material={materials["Red.001"]}
        position={[3.928, 0.19, -2.253]}
      />
      <mesh
        name="origin"
        geometry={nodes.origin.geometry}
        material={materials["Red.001"]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1200}
      />
    </group>
  );
}

useGLTF.preload("/model/heart.glb");