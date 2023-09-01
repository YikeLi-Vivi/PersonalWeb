import React from 'react'
import ProjectCard from '../components/ProjectCard'
import styled from 'styled-components'
import react from "../assets/react.svg"
import convehull from "../assets/convexhull.png"
import JavaScript from "../assets/JavaScript.png"
import p5js from "../assets/p5js.png"
import boba from "../assets/boba.png"
import Python from "../assets/Python.svg.png"
import pyqt from "../assets/pyqt.png"
import css from "../assets/css.png"
import gailbot from "../assets/gailbot.jpg"
import c from "../assets/c.png"
import pyinstaller from "../assets/pyinstaller.png"
import svm from "../assets/svm.jpg"
import {Title} from "../style/uiComponent"

const Card = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr;
    width:80%;
    column-gap: 10%;
    margin: 5% 10%;
`


const Project = () => {
    
  return (
    <>
        <Title>Side Projects</Title>
    <Card>
        <ProjectCard
            img={svm}
            name="Simple Virtual Machine for VScheme"
            tech={[c]}
            description={["This is a semester long pair project. We built a translation pipeline that compile vscheme \
                     (a subset of scheme language), through several intermediate representations, \
                    into virtual machine code, and finally run by a virtual machine.",
                    "The language supports features including automatic curry, exception handling and lambda!"]}
            time='2023'
            link={null}
        />
        <ProjectCard img={gailbot} name="GailBot Desktop App" 
                    description={["A natural language processing app that converts audio file to text with paralinguistic feature,\
                                   The app is primarily used by communication researcher. \
                                   Implement both the front-end UI and backend pipeline for audio transcription and analysis"]}
                    tech = {[Python, pyqt, pyinstaller]}
                    time="2022-2023"
                    link="https://pypi.org/project/GailBot/"
                />

        <ProjectCard img={convehull} name="Convex Hull Solver Visualization"
                    description={["Solve Convex Hull with four different algorithms: Gift Wrapping, Graham Scan, Quick Hull, and Divide and Conquer.",
                                  "Implement visual representation to illustrate the algorithm."]}
                    tech={[react, p5js, JavaScript]}
                    time="2022"
                    link='https://yikeli-vivi.github.io/Convex-Hull-Visualiser-/'/>

        <ProjectCard img={boba} name="Interactive Bubble Tea Menu" 
                     description={["A Bubble Tea menu with animation to simulate the bubble tea 🧋 in vanilla javascript. "]}
                     tech={[css, JavaScript]}
                    time="2020"
                    link='https://yikeli-vivi.github.io/Boba/'/>


    </Card>
    </>
  )
}

export default Project