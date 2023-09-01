import React from 'react'
import styled from 'styled-components'
import Experience, {Education} from '../components/Experience'
import { Title } from '../style/uiComponent'
import Background from '../components/Background'
const Wrapper = styled.div`
    width: 55%; 
    margin:5% 22.5%;
    line-height:1.5em;
    letter-spacing:0.2;
    font-size:0.9rem;
`
const Label = styled.div`
    font-size: 1.2em;
    text-transform: uppercase;
    font-weight: 900;
`
const Line = styled.div`
    height: 2px;
    background-color: #fff;
    width: 100%;
    margin-top: 3%;
    margin-bottom: 2%;
`

const ItalicSpan = styled.span`
    font-style:italic;
`

const CV = () => {
  return (
    <Wrapper>
        <Title>Vivian Li CV</Title>
        <Line/>
        <Label>Education</Label>
        <Education year='2020.09 - 2024.05' school='Tufts University'
                    position=' Bachelor of Science '
                    major='Computer Science, Cognitive and Brain Science'
                    courses={["CS-40 Machine Structure and Assembly Language", 
                                    "CS-160 Algorithm", "CS-105 Programming Language",
                                    "CS-15 Data Structure", "CS-135 Machine Learning "]}/>
        <Line/>
        <Label>Experience</Label>

        <Experience year="2023.06 - 2023.08" 
                    organization='Sonos'
                    description={["Develop desktop application for controlling Sonos speaker"]}
                    position="Software Engineer Intern"
                    technologies={["Kotlin", "Compose Multi-Platform", "Gradle"]}/>

        <Experience year="2022.09 - 2023.05" 
                    organization='Tufts University Human Interaction Lab'
                    description={["Implement a GUI app used for Conversation Analysis in research",
                    "Present different phases of the product during monthly lab meeting",
                    "Attend weekly code review and standup meeting"]}
                    position="Research Intern"
                    technologies={["Python", "PyQt", "PyInstaller", ]}/>
        
        <Experience year='2022.01 - Present'
                    organization='Tufts University'
                    description={["Hold office hour to help student with homework and class content",
                    "Grade student's homework and group project"]} 
                    position="Teaching Assistant - Web Programming & Programming Language"
                    technologies={["HTML", "Javascript", "Node.js", "Standard ML", "Scheme"]}   />  

        <Experience year='2022.07 - 2022.08'
                    organization='Tufts University Pre-college Program'
                    description={["Coach pre-college students from learning basic programming concepts to finishing a python team project"]}
                    position="Teaching Assistant"
                    technologies={["Python", "PyGame", "Flask"]}
                    />  

        <Experience year='2022.06 - 2022.12'
                    organization='Tufts University International Center'
                    description={["Restructured and Implemented website for international center service",
                    "Attend international center staff meeting to get user feedback"]}   
                    position="Web Design Assistant"    
                    technologies={["HTML", "CSS", "WordPress", "Figma"]} />       
        
        <Experience year='2021.05 - 2021.07'
                    organization='Arnaya Theatre'
                    description={["Involved in organizing 2021 Arnaya Theatre Festival.", 
                                  "Worked in photography team to make photo-shoot plan for 28 plays, and communicated with media department for photo release."]}   
                    position="Theatre Management Intern"    
                    technologies={[]} />       
        
        <Experience year='2020.05 - 2020.07'
                    organization='猫岛影视文化有限公司'
                    description={["Edit advertisement video for local restaurants", 
                                  "Photo shopped portrait photography for customers",
                                  "Learned and practiced the use of lighting and composition in portrait photography"]}   
                    position="Photography and Video Editing Intern"    
                    technologies={["FinalCut Pro", "PhotoShop", "Premiere"]} />       
        <Line/>
        <Label>SKIlls</Label>
        <br/>
        <div>Programming Language: Kotlin, C++, C, Python, Javascript, Typescript, Standard ML</div>
        <br/>
        <div>Frontend: Jetpack Compose, Compose Multi-platform, HTML, CSS, React Native, React.js, PyQt</div>
        <br/>
        <div>Backend: Node.js, Flask, MongoDB, SQL, NonSQL</div>
        <br/>
        <div>Software: Figma, PhotoShop, Final Cut Pro</div>
    </Wrapper>
  )
}

export default CV