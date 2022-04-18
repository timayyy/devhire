import styled from "styled-components";

export const StyledHomePageSection = styled.div`
    .heading {
        font-weight: 700;
        font-size: 3.2rem;
        letter-spacing: 1px;
        color: ${({ theme }) => theme.colors?.black};
    }
`;
export const StyledDevelopersListSection = styled.div`
    margin-top: 7.2rem;

    .grid-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(23.8rem, 1fr));
        grid-column-gap: 2rem;
        grid-row-gap: 2rem;
    }
`;