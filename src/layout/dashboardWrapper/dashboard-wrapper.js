import { useState, useEffect } from 'react';

//Components
import { DashboardNavbar } from '../../components/dashboard-navbar';
import { DashboardSidebar } from '../../components/dashboard-sidebar';
import { SelectInput } from '../../components/select';

//Styles
import { DashboardContainer, DashboardSideBarContainer, DashboardHeaderContainer, DashboardMainContainer, StyledDashboardMainContainer, StyledBottomSection } from './dashboard-wrapper.style'

const DashboardWrapper = ({ children, ...rest }) => {
    const [showNav, setShowNav] = useState(0)

    const toggle = () => {
        setShowNav(!showNav)
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <DashboardContainer {...rest}>
            <DashboardSideBarContainer>
                <DashboardSidebar toggleNav={toggle} visible={showNav} close={toggle} />
            </DashboardSideBarContainer>
            <DashboardHeaderContainer>
                <DashboardNavbar toggle={toggle} />
            </DashboardHeaderContainer>
            <DashboardMainContainer>
                <StyledDashboardMainContainer>
                    {children}
                    <StyledBottomSection>
                        <p className='copywright'>© 2022 DevHire</p>
                        <SelectInput />
                    </StyledBottomSection>
                </StyledDashboardMainContainer>
            </DashboardMainContainer>
        </DashboardContainer>
    )
}

export { DashboardWrapper }
