"use client";
import { Canvas } from '@react-three/fiber';
import React from 'react';
import Model from './Model';
import { OrbitControls } from '@react-three/drei';

const Scene = () => {
   return (
      <div className='h-screen w-screen'>
         <Canvas>
            <OrbitControls>

            </OrbitControls>
            <Model />
         </Canvas>
      </div>
   );
};

export default Scene;