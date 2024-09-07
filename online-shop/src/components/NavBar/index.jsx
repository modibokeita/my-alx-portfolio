import {FaBars} from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, NavMenu,
     NavItems, NavLinks, MobileIcon, NavBtn, NavBtnLink
    } from "./NavbarElements"
import PropTypes from "prop-types"
function Navbar({toggle}) {
  return (
    <Nav>
        <NavbarContainer>
            <NavLogo to="/">Keita-Fashion</NavLogo>
            <MobileIcon onClick={toggle}>
                <FaBars />
            </MobileIcon>
            <NavMenu>
                <NavItems>
                    <NavLinks to="features">Features</NavLinks>
                </NavItems>
                <NavItems>
                    <NavLinks to="about">Products</NavLinks>
                </NavItems>
                <NavItems>
                    <NavLinks to="contact">Shop Now</NavLinks>
                </NavItems>
                <NavItems>
                    <NavLinks to="testimonials">Testimonials</NavLinks>
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

