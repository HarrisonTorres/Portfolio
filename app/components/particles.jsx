'use client';
import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesConfig from "./config/particles_config";
const ParticlesBackgound = () => {
  
  const particlesInit = useCallback(async engine => {
    console.log(engine);

    await loadFull(engine);
  }, []);


  return (
    <div >
        <Particles 
        className="particles_Canva"
        options={particlesConfig}
        init={particlesInit}
        />

    </div>
  );
}

export default ParticlesBackgound;
