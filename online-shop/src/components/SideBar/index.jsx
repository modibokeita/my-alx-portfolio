import { SideBarContainer, Icon, CloseIcon,
    SideBarWrapper, SideBarMenu, SideBarLink, SideBtn, SideBarRoute

} from "./SideBarElements"
import PropTypes from "prop-types"
function SideBar({isOpen, toggle}) {
  return (

    <SideBarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SideBarWrapper >
            <SideBarMenu>
                <SideBarLink to="home">Home</SideBarLink>
                <SideBarLink to="about">About</SideBarLink>
                <SideBarLink to="contact">Contact</SideBarLink>
                <SideBarLink to="signin">Sign Up</SideBarLink>
            </SideBarMenu>
            <SideBtn>
                <SideBarRoute to="/signin">Sign In</SideBarRoute>
            </SideBtn>
        </SideBarWrapper>
    </SideBarContainer>

  )
}
SideBar.propTypes = {
    isOpen: PropTypes.bool,
    toggle: PropTypes.func
}
export default  SideBar

