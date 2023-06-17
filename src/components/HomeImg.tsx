import React, {MouseEvent} from 'react'
import styled from "styled-components"
import portrait from "../assets/portrait.jpeg"

const ImgContainer = styled.div`
    display:flex;
    justify-content:center;
`
const ImgDiv = styled.img`
    width: 220px;
    height:220px;
    border-radius:50%;
    cursor: pointer;
`

interface PropType {
    onClick: React.MouseEventHandler<HTMLImageElement>
}

const HomeImg = (props: PropType) => {
  return (
    <ImgContainer>
        <ImgDiv src={portrait} alt="img"  onClick = {props.onClick}/>
    </ImgContainer>
  )
}

export default HomeImg