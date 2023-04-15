import Link from "next/link";
import styled from "styled-components";
import { theme } from "../../styles/themes";

const NavBarUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: ${theme.colors.darkGrey};
`;
const NavBarLi = styled.li`
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  float: left;
`;

function MainNavBar() {
  return (
    <NavBarUl>
      <Link href="/">
        <NavBarLi>Home</NavBarLi>
      </Link>
      <Link href="/vuln">
        <NavBarLi>Vulnerabilites</NavBarLi>
      </Link>
      <Link href="/editor">
        <NavBarLi>Editor</NavBarLi>
      </Link>
      <Link href="/faq">
        <NavBarLi>FAQ</NavBarLi>
      </Link>
    </NavBarUl>
  );
}

export default MainNavBar;
