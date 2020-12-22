/* eslint-disable no-underscore-dangle */
import React from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { IProject } from '../models/Project';
import techs, { ITech } from '../utils/technologies';
import api from '../services/Api';

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

interface IProjectSerielized extends IProject {
  _tags: ITech[];
}

interface IProps {
  projects: IProjectSerielized[]
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
          {projects.map((project) => (
            <ProjectItem key={`${project._id}`}>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>

              <ProjectTags>
                {project._tags.map((tag) => (
                  <ProjectTag key={`${project._id}`.slice(0, 3)} color={tag.color}>{tag.name}</ProjectTag>
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
    const { data } = await api.get<IProject[]>('/api/projects');

    return {
      props: {
        projects: data.map((project) => {
          const _tags = [];

          project.tags.split(', ').forEach((tag) => {
            techs.forEach((tech) => {
              if (tech.identifier === tag) _tags.push(tech);
            });
          });

          return {
            ...project,
            _tags,
          };
        }) || [],
      },
      revalidate: 15,
    };
  } catch (err) {
    return {
      props: {
        projects: [],
      },
      revalidate: 15,
    };
  }
};

export default Projects;
