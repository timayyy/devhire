import { DeveloperCard } from '../../components/developer-card'
import { DashboardWrapper } from '../../layout/dashboardWrapper/dashboard-wrapper'
import { StyledDevelopersListSection, StyledHomePageSection } from '../../styles/home'
import { useSelector } from 'react-redux'

const FavoritesPage = () => {
    const favorite = useSelector((state) => state.favorite)
    const { favoriteItems } = favorite

    return (
        <DashboardWrapper>
            <StyledHomePageSection>
                <h1 className='heading'>Favorites</h1>
                <StyledDevelopersListSection>
                    <div className="grid-container">
                        {favoriteItems.length <= 0 ? <h1>No favorite developer yet</h1> : favoriteItems.map((developer, index) => (
                            <DeveloperCard key={index} developer={developer} />
                        ))}
                    </div>
                </StyledDevelopersListSection>
            </StyledHomePageSection>
        </DashboardWrapper>
    )
}

export default FavoritesPage