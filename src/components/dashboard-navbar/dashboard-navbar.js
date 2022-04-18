import {
    NavbarContainer,
    IconContainer,
} from './dashboard-navbar.style'
import { MdMenu } from "react-icons/md";



const DashboardNavbar = ({ toggle }) => {
    return (
        <NavbarContainer>
            <IconContainer>
                <MdMenu size={30} onClick={toggle} />
            </IconContainer>
        </NavbarContainer>
    )
}

export { DashboardNavbar }
