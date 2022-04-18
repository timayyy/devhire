import styled, { css } from "styled-components";

const Backdrop = styled.div`
    position: fixed;
    height: 100vh;
    width: 100vw;
    opacity: 0;
    pointer-events: none;
    z-index: 1;
    background-color: rgba(0,0,0, .4);
    transition: opacity .2s cubic-bezier(0.4, 0, 1, 1) !important;
    ${p => p.visible && css`
        opacity: 1;
        pointer-events: all;
    `}
    @media(min-width: 1167px) {
        opacity: 0;
        pointer-events: none;
    }
    @media(max-width: 356px) {
        height: 100%;
        width: 100%;
    }
`;

export { Backdrop }
