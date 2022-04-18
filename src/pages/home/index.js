import { useSelector } from 'react-redux'
import { DashboardWrapper } from '../../layout/dashboardWrapper/dashboard-wrapper'
import { StyledHomePageSection, StyledDevelopersListSection } from '../../styles/home'

import { DeveloperCard } from '../../components/developer-card'
import { Spinner } from '../../components/spinner/spinner'
import { Message } from '../../components/message/message'

const HomePage = () => {

    const developerList = useSelector((state) => state.developerList)
    const { loading, error, developers } = developerList

    return (
        <DashboardWrapper>
            <StyledHomePageSection>
                <h1 className='heading'>Hire Top Developers</h1>
                <StyledDevelopersListSection>
                    {loading ? <Spinner /> : error ? <Message variant='error'>{error}</Message> : (
                        <div className="grid-container">
                            {developers.map((developer, index) => (
                                <DeveloperCard key={index} developer={developer} />
                            ))}
                        </div>
                    )}
                </StyledDevelopersListSection>
            </StyledHomePageSection>
        </DashboardWrapper>
    )
}

export default HomePage