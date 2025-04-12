import React, { useMemo, useRef } from 'react';
import { fragment, vertex } from '../shaders/gradient-shader';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

var colors = require("nice-color-palettes");
// * Peek one palette 
let ind = Math.floor(Math.random() * colors.length);
// ind = 8;
let palette = colors[ind];
// * Setting colors to Three.js colors
palette = palette.map((color: string) => new THREE.Color(color))

const Model = () => {
   // const { size } = useThree();

   const shaderRef = useRef<THREE.ShaderMaterial>(null);

   const uniforms = useMemo(() => ({
      time: { value: 0.0 },
      uColor: { value: palette }
      // Add more uniforms as needed, e.g. resolution
      // iResolution: { value: new THREE.Vector3(size.width, size.height, 1.0) },
   }), []);

   //* Update time every frame
   useFrame(({ clock }) => {
      if (shaderRef.current) {
         shaderRef.current.uniforms.time.value = clock.getElapsedTime();
      }
   });

   // const uniforms = useMemo(() => ({
   //    iResolution: { value: new THREE.Vector3(size.width, size.height, 1.0) },
   // }), [size.width, size.height]);
   return (
      <mesh>
         {/* args={[1, 1, 300, 300]} */}
         {/* args={[5, 5, 50, 50]} */}
         <planeGeometry args={[1, 1, 300, 300]} />
         <shaderMaterial
            ref={shaderRef}
            uniforms={uniforms}
            fragmentShader={fragment}
            vertexShader={vertex}
            side={THREE.DoubleSide}
         // wireframe={true}
         />
         {/* <meshBasicMaterial color={"red"} wireframe={true} /> */}
      </mesh>
   );
};

export default Model;