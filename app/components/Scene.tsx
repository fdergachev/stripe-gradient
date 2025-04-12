"use client";
import { Canvas } from '@react-three/fiber';
import React from 'react';
import Model from './Model';

const Scene = () => {
   return (
      <div className='h-screen w-screen'>
         <Canvas>
            <Model />
         </Canvas>
      </div>
   );
};

export default Scene;