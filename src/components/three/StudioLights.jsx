import { Environment, Lightformer } from "@react-three/drei";
import React from "react";

const StudioLights = () => {
  return (
    <group name="lights">
      <Environment resolution={256}>
        <group>
          <Lightformer
            form="rect" // circle | ring | rect (optional, default = rect)
            intensity={10} // power level (optional = 1)
            position={[-10, 5, -5]}
            color="white" // (optional = white)
            scale={10} // Scale it any way you prefer (optional = [1, 1])
            rotateY={Math.PI / 2}
          />
          <Lightformer
            form="rect" // circle | ring | rect (optional, default = rect)
            intensity={10} // power level (optional = 1)
            position={[10, 0, 1]}
            color="white" // (optional = white)
            scale={10} // Scale it any way you prefer (optional = [1, 1])
            rotateY={Math.PI / 2}
          />
        </group>
      </Environment>
      <spotLight
        position={[-2, 10, 5]}
        angle={0.15}
        decay={0}
        intensity={Math.PI * 0.2}
      />
      <spotLight
        position={[0, -25, 10]}
        angle={0.15}
        decay={0}
        intensity={Math.PI * 0.2}
      />
      <spotLight
        position={[0, 15, 5]}
        angle={0.15}
        decay={0}
        intensity={Math.PI * 1}
      />
    </group>
  );
};

export default StudioLights;
