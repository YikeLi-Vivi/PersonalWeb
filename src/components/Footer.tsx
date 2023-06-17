import React from 'react'
import styled from 'styled-components'
import { Linkedin, Mail, GitHub } from 'react-feather'
import Background from '../components/Background'

const FooterContainer = styled.div`
    width: 100;
    border-top: 2px solid white;
    height: 20vh;
    justify-content: center;
    display:flex;
    margin-top: 10vh;
`
const Link = styled.a`
    color: white;
    margin: 5vh 6vh;
    transition: all ease-in 0.2s 0.3s;
    :hover{
        color: #579BB1;
    };
`
const Footer = () => {
  return (
    <FooterContainer>
        <Link href={"https://www.linkedin.com/in/yike-li-85b04b1b2/"} >
        <Linkedin  size={25} />
        </Link>
        <Link href='mailto:vivianliyike@gmail.com'>
        <Mail  size={25} />
        </Link>
        <Link href='https://github.com/YikeLi-Vivi'>
        <GitHub/>
        </Link>
    </FooterContainer>
  )
}

export default Footer