"use client";
import { Canvas } from '@react-three/fiber';
import React from 'react';
import Model from './Model';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';

const Scene = () => {
   return (
      <div className='h-screen w-screen'>
         <Canvas>
            <OrbitControls>
               <PerspectiveCamera makeDefault position={[0, 0, 0.2]} />
            </OrbitControls>
            <Model />
         </Canvas>
      </div>
   );
};

export default Scene;