import React from 'react'
import {Nav, NavLink, NavMenu} from './NavBarComponents'
import PropTypes from 'prop-types'

interface Props {

}

const NavBar = (props: Props) => {
  return (
        <Nav>
            <NavMenu>
                <NavLink to="./Vivian-Li/home">Vivian Li</NavLink>
                <NavLink to="./Vivian-Li/project">Projects</NavLink>
                <NavLink to="./Vivian-Li/cv">CV</NavLink>
            </NavMenu>
        </Nav>
  )
}

NavBar.propTypes = {}

export default NavBar