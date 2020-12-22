import React from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import axios from 'axios';

import Header from '../components/Header';

import {
  Container,
  Panel,
  PDescription,
  ProjectsList,
  ProjectItem,
  ProjectDescription,
  ProjectTag,
  ProjectTags,
  ProjectTitle,
  PTitle,
} from '../styles/pages/Projetos';
import Footer from '../components/Footer';

interface IProps {
  projects: {
    title: string;
    description: string;
    tags: {
      name: string;
      color: string;
    }[];
  }[];
}

interface IResponse {
  projects: {
    title: string;
    description: string;
    tags: {
      name: string;
      color: string;
    }[];
  }[];
}

const Projects: React.FC<IProps> = ({ projects }) => (
  <>
    <Head>
      <title>Dinastia Foca - Projetos</title>
    </Head>

    <Container>
      <Header currentPage="projects" />

      <Panel>
        <PTitle>Projetos</PTitle>
        <PDescription>Todos os projetos atuais</PDescription>

        <ProjectsList>
          {projects.map((project, index) => (
            // Ação temporaria pois ainda não temos ID
            // eslint-disable-next-line react/no-array-index-key
            <ProjectItem key={`${index}`}>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>

              <ProjectTags>
                {project.tags.map((tag, tagIndex) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <ProjectTag key={`${tagIndex}`} color={tag.color}>{tag.name}</ProjectTag>
                ))}
              </ProjectTags>
            </ProjectItem>
          ))}
        </ProjectsList>
      </Panel>

      <Footer />
    </Container>
  </>
);

export const getStaticProps: GetStaticProps = async () => {
  try {
    const { data } = await axios.get<IResponse>(`${process.env.API_URL}/api/projects`);

    return {
      props: {
        projects: data.projects || [],
      },
      revalidate: 60,
    };
  } catch (err) {
    return {
      props: {
        projects: [],
      },
    };
  }
};

export default Projects;
