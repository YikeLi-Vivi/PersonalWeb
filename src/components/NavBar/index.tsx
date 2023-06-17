import {Nav, NavLink, NavMenu} from './NavBarComponents'
import PropTypes from 'prop-types'

interface Props {

}

const NavBar = (props: Props) => {
  return (
    <>
        <Nav>
            <NavMenu>
                <NavLink to="./home">Vivian Li</NavLink>
                <NavLink to="./project">Projects</NavLink>
                <NavLink to="./cv">CV</NavLink>
            </NavMenu>
        </Nav>
    </>
  )
}

NavBar.propTypes = {}

export default NavBar