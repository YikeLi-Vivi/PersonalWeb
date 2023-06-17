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
            <div> From vanilla javascript to frameworks such as React, I have experience with web developments for around 2 years.
            </div>
            <div> I enjoy creating unique interfaces through code !! </div>
            <br/>
            <div> I also have experience in software development in python. I have built a GUI interface and a backend pipeline for a desktop application.</div>

        </Card>
    </FlexContainer>

    <FlexContainer>
        <Card>
            <Title style={{width:"70%", marginLeft:"15%"}}>What  an I Learning ? </Title>
            <div> During my summer internship at Sonos, I am involved in Android development and multi-platform development, using 
                  Compose Multi-platform and Kotlin. 
            </div>
            <br/>
        </Card>
    </FlexContainer>
    </>
  )
}

export default Introduction