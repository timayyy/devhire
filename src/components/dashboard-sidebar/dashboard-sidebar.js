import { StyledSideBar, StyledLogoContainer } from './dashboard-sidebar.style'
import { Backdrop } from '../backdrop'
import NavLinkGroup from './nav-link-group'

const DashboardSidebar = ({ visible, close }) => {
    return (
        <>
            <Backdrop visible={visible} onClick={close} />
            <StyledSideBar visible={visible} >
                <StyledLogoContainer>
                    <h1>Dev<span >Hire</span></h1>
                </StyledLogoContainer>
                <NavLinkGroup />
            </StyledSideBar>
        </>
    )
}

export { DashboardSidebar }
