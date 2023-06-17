import React, {useRef, createRef} from 'react'
import Name from '../components/Name'
import HomeImg from '../components/HomeImg'
import Introduction from '../components/Introduction'
import Background from '../components/Background'
import {TypeAnimation} from "react-type-animation"

const captionString = [ "Hi there! This is Vivian Li."]


const Home = () => {
    const About = createRef()
    const handleScroll = () => {
        const element = document.getElementById('about');
        if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        }
    }
  return (
    <div>
        <Background/>
        <Name/>
        <HomeImg onClick={handleScroll} />
        <TypeAnimation sequence={captionString}
                   cursor={false}
                   style={{textAlign: "center", marginTop: "5%", fontSize: "1.8em"}}/>

        <Introduction ref = {About} id="about"/>
    </div>
  )
}

export default Home