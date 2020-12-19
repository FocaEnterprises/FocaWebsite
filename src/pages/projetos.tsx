import Head from 'next/head';
import React from 'react';
import Header from '../Components/Header';

import { Container } from '../styles/pages/Projetos';

const Projects: React.FC = () => (
  <>
    <Head>
      <title>Dinastia Foca - Projetos</title>
    </Head>

    <Container>
      <Header currentPage="projects" />
    </Container>
  </>
);

export default Projects;
