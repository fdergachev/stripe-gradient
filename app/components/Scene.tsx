"use client";
import { Canvas } from '@react-three/fiber';
import React from 'react';
import Model from './Model';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';


const Scene = () => {
   ;
   const PI = 3.141592653589793238;
   return (
      <div className='h-screen w-screen'>
         <Canvas>
            {/* <PerspectiveCamera makeDefault position={[-0.1, -0.5, 0.45]} rotation={[0.343, -0.25, 0.11]} /> */}
            <OrbitControls>
               <PerspectiveCamera makeDefault position={[0, 0, 2]} />
            </OrbitControls>
            <Model />
         </Canvas>
      </div>
   );
};

export default Scene;