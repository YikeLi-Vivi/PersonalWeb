import { NavLink as Link } from "react-router-dom";
import styled from "styled-components"
import NavBar from "./NavBar";
import { Color } from "../../style/color";

export const Nav = styled.nav`
height: 85px;
display: flex;
/* position:sticky; */
top:0;
justify-content:space-around;
text-align:center;
margin: 2% 0%;
border-bottom: solid 0.15rem white;
background-color: ${Color.BACKGROUND};
z-index:10,
`;

export const NavLink = styled(Link)`
color:#fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
box-shadow: 0.3rem -0.3rem 0 -0.5rem ${Color.NAVBAR_BORDER_1}, 0.3rem -0.3rem ${Color.NAVBAR_BORDER_1}, 0.6rem -0.6rem 0 -0.1rem ${Color.NAVBAR_BORDER_2}, 0.6rem -0.6rem ${Color.NAVBAR_BORDER_2};
width: 150px; 
height: 35px;
border: solid 0.1em white;
margin-right: 10%;
transition-property: all;
transition-duration:0.7;
transition: all 0.7s ease-in 0.3s;
text-align: right;
font-family:'VT323', monospace;
font-size: 1.3rem;

&.active {
    box-shadow: none;
    color: #fff;
    background-color: ${Color.NAVBAR_BORDER_1};
    border: 0.1em solid ${Color.NAVBAR_BORDER_1};
}

:hover{
    box-shadow: none;
    border: 0.1em solid ${Color.NAVBAR_BORDER_1}
}
`;



export const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -24px;

@media screen and (max-width: 768px) {
}
`;
