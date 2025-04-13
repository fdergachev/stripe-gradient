"use client";
import { Canvas } from '@react-three/fiber';
import React from 'react';
import Model from './Model';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { useControls } from 'leva';

const Scene = () => {
   const {
      cameraX,
      cameraY,
      cameraZ,
      rotateX,
      rotateY,
      rotateZ
   } = useControls({
      cameraX: {
         value: -0.1,
         step: 0.1
      },
      cameraY: {
         value: -0.5,
         step: 0.1
      },
      cameraZ: {
         value: 0.45,
         step: 0.1,
      },
      rotateX: {
         value: 0.343
      },
      rotateY: {
         value: -0.25
      },
      rotateZ: {
         value: 0.11
      }
   });
   const PI = 3.141592653589793238;
   return (
      <div className='h-screen w-screen'>
         <Canvas>
            {/* <PerspectiveCamera makeDefault position={[-0.1, -0.5, 0.45]} rotation={[0.343, -0.25, 0.11]} /> */}
            <PerspectiveCamera makeDefault position={[cameraX, cameraY, cameraZ]} rotation={[rotateX, rotateY, rotateZ]} />
            {/* <OrbitControls>
               <PerspectiveCamera makeDefault position={[0, 0, 3]} />
            </OrbitControls> */}
            <Model />
         </Canvas>
      </div>
   );
};

export default Scene;