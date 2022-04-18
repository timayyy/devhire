import styled from "styled-components";

export const StyledSideBar = styled.nav`
background-color:  ${({ theme }) => theme.colors?.grey01};
width: 300px;
height: 100vh;
border-right: 1px solid ${({ theme }) => theme.colors?.grey};
position: sticky;
top: 0;
z-index: 1000;
display: flex;
flex-direction: column;
transition-property: width, transform !important;
transition-duration: 0.3s !important;
transition-timing-function: cubic-bezier(0.4, 0, 1, 1) !important;

@media(max-width: 920px) {
    position: fixed;
    width: 300px;
    transform: translate3d(
        ${({ visible }) =>
        visible ? 0 : "calc(300px - 300px*2)"},
0,
    0
  );
transition: transform 0.3s
    ${({ visible }) =>
        visible
            ? "cubic-bezier(0.4, 0, 1, 1)"
            : "cubic-bezier(0, 0, 0.2, 1)"
    } !important;
}
@media(max-width: 356px) {
    height: 100%;
    // width: 100%;
}
`;

export const StyledLogoContainer = styled.div`
    padding: 3rem 0 0 5.4rem;

    h1 {
        font-weight: 700;
        font-size: 3.2rem;
        letter-spacing: 1px;
        color: #14142B;

        span {
            color: ${({ theme }) => theme.colors?.blue}
        }
    }
    
`