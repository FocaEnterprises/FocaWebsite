import Head from 'next/head';
import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import Footer from '../tempComponents/Footer';
import Header from '../tempComponents/Header';

import {
  Container, Panel, Widtget, Title, Description, Button,
} from '../styles/pages/Discord';

const Projects: React.FC = () => (
  <>
    <Head>
      <title>Dinastia Foca - Discord</title>
    </Head>

    <Container>
      <Header currentPage="discord" />

      <Panel>
        <div>
          <Title>Comunidade</Title>
          <Description>
            Junte-se a nossa comunidade e descubra um mundo mais divertindo entre amigos
          </Description>

          <Button
            rel="noopener noreferrer"
            target="_blank"
            href="https://discord.gg/Q2tK4QCtdh"
          >
            <FiLogIn />
            Entrar
          </Button>
        </div>

        <Widtget>
          <iframe
            title="adwfq"
            src="https://discord.com/widget?id=745342826493247569&theme=dark"
            width="100%"
            height="100%"
            frameBorder="0"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
          />
        </Widtget>
      </Panel>

      <Footer />
    </Container>
  </>
);

export default Projects;
