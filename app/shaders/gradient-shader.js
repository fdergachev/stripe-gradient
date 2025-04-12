export const vertex = /* glsl */ `
   varying vec2 vUv;
   void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
   }
`;

export const fragment = /* glsl */`
   uniform vec3 iResolution;
   uniform float time;
   varying vec2 vUv;
   varying vec3 vPosition;
   uniform vec2 pixels;
   float PI = 3.141592653589793238;
   
   void main(){
      vec2 uv = vUv; 
      gl_FragColor = vec4(uv, 0.0, 1.0);
   }
`