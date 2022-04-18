import styled from "styled-components";

export const DashboardContainer = styled.div`
  display: grid;
  grid:
  "nav header" min-content
  "nav main" 1fr / min-content 1fr;
  min-height: 100vh;

  /* @media( max-width: 1167px ) {
    display: block
  } */
`;

export const DashboardSideBarContainer = styled.div`
  grid-area: nav;
  z-index: 2000;
`;

export const DashboardHeaderContainer = styled.header`
  grid-area: header;
  position: sticky;
  top: 0;
  z-index: 100;
`;

export const DashboardMainContainer = styled.main`
  grid-area: main;
  background-color: ${({ theme }) => theme.colors?.grey01}
`;
export const StyledDashboardMainContainer = styled.main`
    margin: 0 auto;
    padding: 3.1rem 1rem;
    max-width: 103.2rem;
`;

export const StyledBottomSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 16.3rem;

  .copywright {
    font-weight: 500;
    font-size: 1.4rem;
    color: #8692A6;
  }
`;