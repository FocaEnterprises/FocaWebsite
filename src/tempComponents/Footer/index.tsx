import React from 'react';
import { DiCode } from 'react-icons/di';
import { FaGithub, FaDiscord } from 'react-icons/fa';

import {
  Contacts, ContactsItem, Container, Creator, Logo,
} from './styles';

const Footer: React.FC = () => (
  <Container>
    <Logo>
      <DiCode size="4rem" />
      <span>Dinastia Foca</span>
    </Logo>

    <Contacts>
      <ContactsItem rel="noopener noreferrer" target="_blank" href="https://github.com/foca-enterprises">
        <FaGithub size="1.5rem" />
      </ContactsItem>
      <ContactsItem rel="noopener noreferrer" target="_blank" href="https://discord.gg/Q2tK4QCtdh">
        <FaDiscord size="1.5rem" />
      </ContactsItem>
    </Contacts>

    <Creator>
      Criado por
      {' '}
      <a href="https://github.com/miguel5g">Miguel Ângelo</a>
      {' '}
      com muito ❤
    </Creator>
  </Container>
);

export default Footer;
