import React from 'react'
import PropTypes from 'prop-types'
import styled from "styled-components"

interface Prop {
    src: string 
}

const Image = styled.img`
    width: 30px;
    height:30px;
    border-radius:10%;
    margin: -10px 10px; 
`
const Icon = (props: Prop) => {
  return (
    <Image src={props.src} />
  )
}

Icon.propTypes = {}

export default Icon