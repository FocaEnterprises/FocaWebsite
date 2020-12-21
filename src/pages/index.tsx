/* eslint-disable max-len */
import React from 'react';
import Head from 'next/head';
import { FiArrowRight } from 'react-icons/fi';

import {
  Container, Panel, PButton, PDescription, PImage, PTitle,
} from '../styles/pages/Index';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const Index: React.FC = () => (
  <>
    <Head>
      <title>Dinastia Foca</title>
    </Head>

    <Container>
      <Header currentPage="index" />

      <Panel>
        <div>
          <PTitle>Dinastia Foca</PTitle>
          <PDescription>Venha se divertir fazendo o que gosta. Programe com a gente!</PDescription>
          <PButton href="/projetos">
            <FiArrowRight />
            Projetos
          </PButton>
        </div>

        <PImage src="hey_illustration.svg" />
      </Panel>

      <Footer />
    </Container>
  </>
);

export default Index;
