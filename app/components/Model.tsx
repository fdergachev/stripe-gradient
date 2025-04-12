import React from 'react';
import { fragment, vertex } from '../shaders/gradient-shader';


const Model = () => {
   return (
      <mesh>
         <planeGeometry args={[5, 5, 300, 300]} />
         <shaderMaterial
            fragmentShader={fragment}
            vertexShader={vertex}
         />
         {/* <meshBasicMaterial color={"red"} wireframe={true} /> */}
      </mesh>
   );
};

export default Model;