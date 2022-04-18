import styled from "styled-components";

export const NavbarContainer = styled.div`
    height: 8.19rem;
    background-color: ${({ theme }) => theme.colors?.grey01};
    padding: 0 2rem;
    display: flex;
    align-items: center;
`;

export const IconContainer = styled.div`
    display: none;
    color:  ${({ theme }) => theme && theme.colors?.blue};

    @media (max-width: 920px) {
        display: flex;
        margin-right: 5rem;
        
        svg {
            width: 24px;
            height: 24px;
        }
    }
`;
