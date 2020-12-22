import React from 'react';
import Link from 'next/link';
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
      <Link href="/" passHref>
        <NavItem isSelected={currentPage === 'index'}>Início</NavItem>
      </Link>
      <Link href="/projetos" passHref>
        <NavItem isSelected={currentPage === 'projects'}>Projetos</NavItem>
      </Link>
      <Link href="/discord" passHref>
        <NavItem isSelected={currentPage === 'discord'}>Discord</NavItem>
      </Link>
    </Nav>
  </Container>
);

export default Header;
