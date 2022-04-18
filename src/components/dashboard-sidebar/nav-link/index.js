import styled from "styled-components";
import { NavLink as Link } from 'react-router-dom';

const LinkContainer = styled.div`
    position: relative;
    cursor: pointer;
    margin: 4.1rem 0 0 0;

    &::before {
        content: "";
        position: absolute;
        height: 100%;       
    }
`;

const StyledLink = styled(Link)`
    display: flex;
    align-items: center;
    height: 3rem;
    z-index: 10;
    position: relative;
    padding-left: 5.4rem;

    .label {
        margin-left: 2.1rem;
        font-weight: 700;
        font-size: 2rem;
        color: rgba(0, 0, 0, 0.43);
        white-space: nowrap;
    }

    &.active {
        box-shadow: inset 7px 0px 0px ${({ theme }) => theme.colors?.blue};

        &::before {
            content: "";
            position: absolute;
            height: 100%;       
        }
        
        .icon-container {
            background-color: ${({ theme }) => theme.colors?.blue};
            color: ${({ theme }) => theme.colors?.white};
        }
        
        .label {
            color: ${({ theme }) => theme.colors?.black};
        }
    }
`;
const IconContainer = styled.div`
    width: 3rem;
    height: 3rem; 
    background-color: ${({ theme }) => theme.colors?.grey01};
    color: rgba(0, 0, 0, 0.43);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
`;



const NavLink = ({ icon, label, link, ...rest }) => {
    return (
        <LinkContainer>
            <StyledLink to={link} {...rest}>
                <IconContainer className="icon-container">
                    {icon}
                </IconContainer>
                <div className="label"><span>{label}</span></div>
            </StyledLink>
        </LinkContainer>
    )
}

export default NavLink
