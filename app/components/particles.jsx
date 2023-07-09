'use client';
import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesConfig from "./config/particles_config";

import '../css/style_particles.css'
const ParticlesBackgound = () => {
  
  const particlesInit = useCallback(async engine => {
    console.log(engine);

    await loadFull(engine);
  }, []);


  return (
    <div className="particles_container">
        <Particles 
        id="tsparticles"
        options={particlesConfig}
        init={particlesInit}
        />

    </div>
  );
}

export default ParticlesBackgound;
