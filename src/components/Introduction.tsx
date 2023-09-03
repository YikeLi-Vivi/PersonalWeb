import React, {MutableRefObject} from 'react'
import styled from "styled-components"
import { Color } from '../style/color'


const Card = styled.div `
    width: 550px; 
    padding: 40px;
`
const SolidCard = styled.div`
    width: 470px;
    padding: 40px;
    background-color: ${Color.CARD1};
`
const FlexContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 3% 0%;
`

const Title = styled.div `
    font-family: 'Geo', sans-serif;
    font-size: 2em;
    text-align: center;
    border-bottom: 5px solid ${Color.CARD1};
    line-height: 1.5em;
    width: 50%;
    margin-left: 25%;
    margin-bottom: 0.7em;
`

interface PropType {
    ref: MutableRefObject<any>,
    id: string, 
}


const Introduction = (props : PropType) => {
  return (
    <>
    <FlexContainer ref = {props.ref} id={props.id}>  
        <Card>
        <Title>About Me</Title>
        <div>- A computer Science major at Tufts.</div>
        <div>- A curious reader and learner on cognitive science.</div>
        <div>- A lover for photography, theatre, golf, and baking!</div>
        </Card> 
    </FlexContainer>

    <FlexContainer>
        <Card>
            <Title style={{width:"70%", marginLeft:"15%"}}>What  Can  I  Create ? </Title>
            <div> 
                I have experience with web developments for around 2 years, and I have built projects with vanilla JavaScript, TypeScript, and React.js. 
            </div>
            <br/>
            <div>
                I have also built desktop apps with Kotlin and Python. Familiar with MVVM pattern and Solid principle in architecture design. 
            </div>
            <br/>
        </Card>
    </FlexContainer>

    <FlexContainer>
        <Card>
            <Title style={{width:"70%", marginLeft:"15%"}}>What am I Learning ? </Title>
            <div> 
               I will be taking Compiler and Internet-scale Distributed Systems during 2023 Falls at Tufts, through which I will learn the nitty gritty about World Wide Web 🌐, and unwrap the black box that convert source code to machine code 👾! 
            </div>
            <br/>
            <div>
                After learning Android development through summer internship at Sonos, I am curious about IOS development and now learning about Swift and Swift UI. 
            </div>
            <div>
                I also continue to experiment with Compose Multi-platform, actively seeking for solutions to cross platform development. 
            </div>
        </Card>
    </FlexContainer>
    </>
  )
}

export default Introduction