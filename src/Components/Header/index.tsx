import React from 'react';
import { DiCode } from 'react-icons/di';

import {
  Container, Logo, Nav, NavItem,
} from './styles';

interface IProps {
  currentPage?: string;
}

const Header: React.FC<IProps> = ({ currentPage }) => (
  <Container>
    <Logo>
      <DiCode size="4rem" />
      <span>Dinastia Foca</span>
    </Logo>

    <Nav>
      <NavItem isSelected={currentPage === 'index'} href="/">Início</NavItem>
      <NavItem isSelected={currentPage === 'projects'} href="/projetos">Projetos</NavItem>
      <NavItem isSelected={currentPage === 'discord'} href="/discord">Discord</NavItem>
    </Nav>
  </Container>
);

export default Header;
