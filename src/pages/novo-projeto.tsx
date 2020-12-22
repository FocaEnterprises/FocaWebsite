/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import Head from 'next/head';
import { FiArrowLeft, FiSend } from 'react-icons/fi';
import Link from 'next/link';

import tags, { ITech } from '../utils/technologies';
import api from '../services/Api';

import {
  AllTags,
  BackButton,
  Button,
  Container,
  Form,
  Input,
  InputGroup,
  InputTitle,
  Tag,
  Panel,
  SelectedTags,
  Tags,
  TextArea,
  Title,
  TagsLabel,
} from '../styles/pages/NovoProjeto';

const Index: React.FC = () => {
  const [isWaiting, setWaiting] = useState<boolean>(false);
  const [pTitle, setPTitle] = useState<string>();
  const [pDescription, setPDescription] = useState<string>();
  const [pTags, setPTags] = useState<ITech[]>([]);
  const [usedTags, setUsedTags] = useState<string[]>([]);

  function handleSuccess() {
    setPTitle('');
    setPDescription('');
    setPTags([]);
    setUsedTags([]);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setWaiting(true);

    const data = {
      title: pTitle,
      description: pDescription,
      tags: pTags,
    };

    api.post('/api/projects', data)
      .then(() => {
        handleSuccess();
        setWaiting(false);
        alert('Criado com sucesso!');
      })
      .catch(() => {
        setWaiting(false);
        alert('Ocorreu algum erro no processo. Tente novamente');
      });
  }

  function handleAddTag(tagName: string) {
    const newTag = tags.filter((tag) => tag.identifier === tagName)[0];

    setPTags([...pTags, newTag]);
    setUsedTags([...usedTags, newTag.identifier]);
  }

  function handleRemoveTag(tagName: string) {
    setPTags(pTags.filter((tag) => tag.identifier !== tagName));
    setUsedTags(usedTags.filter((tag) => tag !== tagName));
  }

  return (
    <>
      <Head>
        <title>Novo projeto</title>
      </Head>

      <Container>
        <BackButton>
          <Link href="/" passHref>
            <a>
              <FiArrowLeft />
              {' '}
              Voltar
            </a>
          </Link>
        </BackButton>

        <Form onSubmit={handleSubmit}>
          <Title>Novo Projeto</Title>

          <Panel>

            <InputGroup>
              <InputTitle>Título</InputTitle>
              <Input
                value={pTitle}
                maxLength={20}
                onChange={(e) => setPTitle(e.target.value)}
              />
            </InputGroup>

            <InputGroup>
              <InputTitle>Descrição</InputTitle>
              <TextArea
                value={pDescription}
                maxLength={250}
                onChange={(e) => setPDescription(e.target.value)}
              />
            </InputGroup>
          </Panel>

          <Tags>
            <AllTags>
              <TagsLabel>Todas as tags</TagsLabel>

              {tags.map((tag) => {
                if (usedTags.indexOf(tag.identifier) !== -1) return (<></>);

                return (
                  <Tag
                    key={tag.identifier}
                    color={tag.color}
                    onClick={() => handleAddTag(tag.identifier)}
                  >
                    {tag.name}
                  </Tag>
                );
              })}
            </AllTags>
            <SelectedTags>
              <TagsLabel>Tags selecionadas</TagsLabel>

              {pTags.map((tag) => (
                <Tag
                  key={tag.identifier}
                  color={tag.color}
                  onClick={() => handleRemoveTag(tag.identifier)}
                >
                  {tag.name}
                </Tag>
              ))}
            </SelectedTags>
          </Tags>

          <Button type="submit" disabled={isWaiting}>
            <FiSend />
            Enviar
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default Index;
