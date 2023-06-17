import React from 'react'
import styled from "styled-components"

const NameDiv = styled.div`
    font-size: 4em ;
    font-family:'Silkscreen', cursive;
    text-align:center;
    width: 100%;
    margin: 5% 0%;
`

const Name = () => {
  return (
    <NameDiv>Vivian Li</NameDiv>
  )
}

export default Name