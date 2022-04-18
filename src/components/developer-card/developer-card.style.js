import styled from "styled-components";

export const StyledDeveloperCard = styled.div`
    background-color: ${({ theme }) => theme.colors?.white};
    border-radius: 10px;
    padding: 5px;

    .image-container {
        /* width: 22.8rem; */
        height: 13.9rem;
        border-radius: 10px;
        position: relative;

        .banner-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 10px;
        }
    }

    .bottom-info {
        margin-top: 3.1rem;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .user-name {
            font-weight: 700;
            font-size: 1.2rem;
        }

        .price {
            font-size: 1rem;
            color: rgba(0, 0, 0, 0.49);
        }

        .hire-text {
            font-weight: 700;
            font-size: 12px;
            color: ${({ theme }) => theme.colors?.blue};
        }
    }
`;

export const StyledFavoriteButton = styled.div`
    /* background-color: red; */
    background-color: ${({ theme, isFavorite }) => isFavorite ? theme.colors?.white : "#BBBBBB"};
    color: ${({ theme, isFavorite }) => isFavorite ? 'red' : theme.colors?.white};
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3.5rem;
    height: 3.5rem;
    position: absolute;
    top: 9px;
    right: 8px;
    cursor: pointer;
`;

export const StyledAvatarContainer = styled.div`
    position: absolute;
    width: 4.4rem;
    height: 4.4rem;
    left: 8px;
    bottom: 0;
    border-radius: 50%;
    border: 2px solid ${({ theme }) => theme.colors?.white};
    transform: translateY(50%);

    .avatar-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
    }
`;