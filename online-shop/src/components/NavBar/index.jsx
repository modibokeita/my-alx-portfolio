import {FaBars} from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, NavMenu,
     NavItems, NavLinks, MobileIcon, NavBtn, NavBtnLink
    } from "./NavbarElements"
import PropTypes from "prop-types"
function Navbar({toggle}) {
  return (
    <Nav>
        <NavbarContainer>
            <NavLogo to="/">Keita</NavLogo>
            <MobileIcon onClick={toggle}>
                <FaBars />
            </MobileIcon>
            <NavMenu>
                <NavItems>
                    <NavLinks to="about">Home</NavLinks>
                </NavItems>
                <NavItems>
                    <NavLinks to="about">About</NavLinks>
                </NavItems>
                <NavItems>
                    <NavLinks to="about">Contact</NavLinks>
                </NavItems>
                <NavItems>
                    <NavLinks to="sinup">Sign Up</NavLinks>
                </NavItems>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to="/signin">Sign In</NavBtnLink>
            </NavBtn>
        </NavbarContainer>
    </Nav>
  )
}

Navbar.propTypes =  {
    toggle: PropTypes.func
}
export default Navbar

