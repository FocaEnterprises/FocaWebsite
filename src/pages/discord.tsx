import Head from 'next/head';
import React from 'react';

import Footer from '../Components/Footer';
import Header from '../Components/Header';

import { Container } from '../styles/pages/Discord';

const Projects: React.FC = () => (
  <>
    <Head>
      <title>Dinastia Foca - Discord</title>
    </Head>

    <Container>
      <Header currentPage="discord" />

      <Footer />
    </Container>
  </>
);

export default Projects;
