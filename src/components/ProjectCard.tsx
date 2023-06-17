import React from 'react'
import PropTypes from 'prop-types'
import styled from "styled-components"
import Icon from "./Icon"

interface Prop{
    name: string,
    time: string,
    link: string | null,
    description: string[], 
    img: string;
    tech: string[]
}

const Card = styled.div `
    width: 100%;
    height: 700px;
    margin-bottom:50px;
`
const ProjectImg = styled.img`
    width: 250px;
    height: 250px;
    margin: 3%;
`

const YearDisplay = styled.div`
    font-weight: 200;
    font-size: 0.8em; 
`

const ProjectTitle = styled.div`
    font-size: 2em; 
    font-weight: 800;
    font-family: "Geo", sans-serif;
`

const ImgContainer = styled.div`
    display:flex;
    align-items: center;
    justify-content:center;
`


const Link = styled.a`
    color: white;
    transition: all ease-in 0.2s 0.3s;
    text-decoration:none;
`
const ProjectCard = (props: Prop) => {
    const {name, time, link, description, img, tech} = props 

  return (
    <Card>
        <Link href={props.link!}>
            <YearDisplay> {time} </YearDisplay>
            <ProjectTitle> {name}</ProjectTitle>
            <ImgContainer>
            <ProjectImg src={img} alt={name} />
            </ImgContainer>
            <div>{description.map((a, idx) => (<div>{a}</div>))}</div>
            <div>Technologies: {tech.map((a, idx) => (<Icon src={a}/> ))}</div>
        </Link>
    </Card>
    )
    
}


export default ProjectCard