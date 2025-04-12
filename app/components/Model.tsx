import React, { useMemo } from 'react';
import { fragment, vertex } from '../shaders/gradient-shader';
import { useThree } from '@react-three/fiber';
import * as THREE from 'three';


const Model = () => {
   // const { size } = useThree();
   const size = new THREE.Vector3(5, 5, 1); // plane size (width, height)

   const uniforms = useMemo(() => ({
      iResolution: { value: size },
   }), []);
   // const uniforms = useMemo(() => ({
   //    iResolution: { value: new THREE.Vector3(size.width, size.height, 1.0) },
   // }), [size.width, size.height]);
   return (
      <mesh>
         <planeGeometry args={[5, 5, 300, 300]} />
         <shaderMaterial
            uniforms={uniforms}
            fragmentShader={fragment}
            vertexShader={vertex}
         />
         {/* <meshBasicMaterial color={"red"} wireframe={true} /> */}
      </mesh>
   );
};

export default Model;