import React, {useCallback} from 'react'
import Particles from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";

const settings = {
    canvas: {
      canvasFillSpace: true,
      width: 200,
      height: 200,
      useBouncyWalls: false,
      zIndex: -2,
    },
    particle: {
      particleCount: 50,
      color: '#94ecbe',
      minSize: 2,
      maxSize: 5
    },
    velocity: {
      directionAngle: 0,
      directionAngleVariance: 360,
      minSpeed: 1,
      maxSpeed: 3
    },
    opacity: {
      minOpacity: 0,
      maxOpacity: 0.5,
      opacityTransitionTime: 3000
    }
  }

const config = {
    zIndex: -2,
    interactivity: {
    },
    canvas: {
        height: 10,
    },
    particles: {
      color: { value: "#ffffff" },
      line_linked: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.3,
        width: 1,
        zIndex: -2,
      },
      move: {
        attract: { enable: false, rotateX: 600, rotateY: 1200 },
        bounce: false,
        direction: "none",
        enable: true,
        out_mode: "out",
        random: false,
        speed: 2,
        straight: false
      },
      number: { density: { enable: true, value_area: 1000 }, value: 60 },
      opacity: {
        anim: { enable: false, opacity_min: 0.1, speed: 1, sync: false },
        random: false,
        value: 0.5
      },
      shape: {
        character: {
          fill: false,
          font: "Verdana",
          style: "",
          value: "*",
          weight: "400"
        },
        polygon: { nb_sides: 5 },
        stroke: { color: "#000000", width: 0 },
        type: "circle"
      },
      size: {
        anim: { enable: false, size_min: 0.2, speed: 40, sync: false },
        random: true,
        value: 5
      }
    },
    polygon: {
      draw: { enable: false, lineColor: "#ffffff", lineWidth: 0.5 },
      move: { radius: 20 },
      scale: 1,
      type: "none",
      url: ""
    },
    fullScreen: { enable: false },
    retina_detect: true,
  }

const Background = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);

        // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);

    return (
        <Particles  id="tsparticles" 
                    options={config}
                    init={particlesInit} 
                    loaded={particlesLoaded} 
                    style={{position: "absolute", 
                            top: "20vh"}}
                    height= "70vh"
                    />
    );
}

export default Background