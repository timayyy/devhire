import styled from 'styled-components'

export const StyledCustomSelect = styled.label`
    position: relative;
    min-width: 16.7rem;

    select {
        -webkit-appearance: none;
        border: none;
        padding: 1.3rem 1.883rem 1.4rem 1.6rem;
        width: 100%;
        background-color: none;
        border: 1px solid #8692A6;
        border-radius: 6px;
        cursor: pointer;
        font-family: inherit;
        font-weight: 500;
        font-size: 1.4rem;
        color: #8692A6;
        transition: all 150ms ease;

        &:focus-visible {
            outline: none;
        }
    }

    svg {
        position: absolute;
        right: 1.83rem;
        top: 1.3rem;
    }
`