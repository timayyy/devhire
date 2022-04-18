import { StyledDeveloperCard, StyledFavoriteButton, StyledAvatarContainer } from './developer-card.style'
import { BsHeartFill } from "react-icons/bs";
import { addToFavorite, removeFromFavorite } from '../../redux/favorite/favorite.actions';
import { useDispatch, useSelector } from 'react-redux'

const DeveloperCard = ({ developer }) => {
    const dispatch = useDispatch()
    const currentCurrency = useSelector((state) => state.currentCurrency)
    const { currency } = currentCurrency

    const { id, service_photo, display_name, avatar, starting_from, isFavorite } = developer

    const toggleFavorite = (id, type) => {

        if (type === 'add') {
            dispatch(addToFavorite(id))
        }
        if (type === 'remove') {
            dispatch(removeFromFavorite(id))
        }

    }


    return (
        <StyledDeveloperCard>
            <div className="image-container">
                <img className='banner-image' src={service_photo} alt="service" />
                <StyledFavoriteButton onClick={() => toggleFavorite(id, isFavorite ? 'remove' : 'add')} isFavorite={isFavorite}>
                    <BsHeartFill size={16} />
                </StyledFavoriteButton>
                <StyledAvatarContainer>
                    <img className='avatar-image' src={avatar} alt="avatar" />
                </StyledAvatarContainer>
            </div>
            <div className="bottom-info">
                <div className="personal-info">
                    <h3 className='user-name'>{display_name}</h3>
                    <p className='price'>{currency.symbol}{(starting_from / currency.divider).toLocaleString()}</p>
                </div>
                <span className='hire-text'>Hire</span>
            </div>
        </StyledDeveloperCard>
    )
}

export { DeveloperCard }