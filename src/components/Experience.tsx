import React from 'react'
import PropTypes from 'prop-types'
import styled from "styled-components"

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 4fr;
    margin: 3% 0%;
    @media screen and (max-width: 800px) {
        grid-template-columns: 1fr;
    }
`
const ListItem = styled.li`
    font-weight:300;
    line-height:1.7em;
    font-size:1em;
`

const TimeDisplay = styled.div`
    font-weight: 200;
    font-size:0.9em;
    margin-top:2px;
`
const Italic = styled.span`
    font-style:italic;
    font-weight:400;
    font-size:0.9em;
`
const Tech = styled.span`
    font-family: "Geo", sans-serif;
    font-size:1.2rem;
`

interface Prop{
    year: string,
    organization: string, 
    position: string, 
    description: string [], 
    technologies: string []
}

interface Prop2{
    year:string,
    school: string, 
    position: string, 
    major: string, 
    courses: string[]
}

const Experience = (props: Prop) => {
  return (
    <Container>
        <TimeDisplay>{props.year}</TimeDisplay>
        <div>
            <div style={{fontSize:"1.1em", fontWeight:700}}>{props.organization}</div>
            <div>{props.position}</div>
            <div> {props.description.map((d, idx)=>{return (<ListItem>{d}</ListItem>)})}</div>
            <div>Technologies: {props.technologies.map((d, idx) => {return <Tech> - {d} </Tech>})}</div>
        </div>

    </Container>
  )
}

Experience.propTypes = {}

export default Experience

export const Education = (props: Prop2) => {
    return (
        <Container>
            <TimeDisplay>{props.year}</TimeDisplay>
            <div>
                <div style={{fontSize:"1.1em", fontWeight:700}}>
                    {props.school}
                    <Italic> {props.position}</Italic>
                </div>
                <div>Major: {props.major}</div>
                <div>Main Courses: {props.courses.map((c, idx)=> {return (<span> &#8226;{c}</span>)})}</div>
            </div>
        </Container>
    )
}