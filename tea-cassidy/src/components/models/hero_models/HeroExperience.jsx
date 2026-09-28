import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
// import { div } from "three/tsl";


import { HelloHead } from "./HelloHead";
import HeroLights from "./HeroLights";

// import Particles from "./Particles";


const HeroExperience = () => {

  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
         {/* deep blue ambient */}
    <ambientLight intensity={0.2} color="#1a1a40" />
    <directionalLight position = {[5,5,10]} intensity={1.5} />

    <OrbitControls
        enablePan={false} // Prevents panning of the scene
        enableZoom={!isTablet} // Disables zoom on tablets
        maxDistance={10} // Maximum distance for zooming out
        minDistance={5} // Minimum distance for zooming in
        minPolarAngle={Math.PI / 5} // Minimum angle for vertical rotation
        maxPolarAngle={Math.PI / 2} // Maximum angle for vertical rotation
    />

    <HelloHead/>  
    <HeroLights />  




    </Canvas>

  )
}

export default HeroExperience;
