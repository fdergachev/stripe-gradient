import React, { useMemo } from 'react';
import { fragment, vertex } from '../shaders/gradient-shader';
import { useThree } from '@react-three/fiber';
import * as THREE from 'three';


const Model = () => {
   // const { size } = useThree();

   // const uniforms = useMemo(() => ({
   //    iResolution: { value: new THREE.Vector3(size.width, size.height, 1.0) },
   // }), [size.width, size.height]);
   return (
      <mesh>
         {/* args={[5, 5, 300, 300]} */}
         <planeGeometry args={[5, 5, 50, 50]} />
         <shaderMaterial
            // uniforms={uniforms}
            fragmentShader={fragment}
            vertexShader={vertex}
            wireframe={true}
         />
         {/* <meshBasicMaterial color={"red"} wireframe={true} /> */}
      </mesh>
   );
};

export default Model;