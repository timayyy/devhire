import styled from "styled-components";
import { MenuData } from '../../../services/menuData'
import NavLink from "../nav-link";

const LinksGroup = styled.div`
  padding: 0px 0px 5rem 0px;
  display: flex;
  flex-direction: column;
  margin-right: 2px;
  overflow: hidden;
  overflow-y: auto;
  background-color: ${({ theme }) => theme.colors?.grey01};
  transition: flex-grow 0.3s cubic-bezier(0.4, 0, 1, 1);
  ::-webkit-scrollbar {
    width: 4px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: grey;
    border-radius: 4px;
  }
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.5);
  }
`;

const NavLinkGroup = () => {
  return (
    <LinksGroup  >
      {MenuData.map((menu, i) => (
        <NavLink
          key={i}
          link={menu.to}
          label={menu.label}
          icon={menu.icon}
        />
      ))}
    </LinksGroup>
  )
}

export default NavLinkGroup
