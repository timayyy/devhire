import styled from "styled-components";

export const StyledMessage = styled.div`
    position: relative;
    padding: 1rem 1rem;
    margin-bottom: 1rem;
    border: 1px solid transparent;
    border-radius: 0.25rem;
    color: ${({ variant }) => variant === 'success' ? '#0f5132' : variant === 'error' ? '#842029' : '#084298'};
    background-color: ${({ variant }) => variant === 'success' ? '#d1e7dd' : variant === 'error' ? '#f8d7da' : '#cfe2ff'};
    border-color: ${({ variant }) => variant === 'success' ? '#badbcc' : variant === 'error' ? '#f5c2c7' : '#b6d4fe'};
    font-size: 1.6rem;
`