/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.main`
  min-height: 100%;

  background-color: ${({ theme }) => theme.bg.secondary};
`;

export const Panel = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  width: 80%;
  margin: 25px auto;
  padding: 40px;

  background-color: ${({ theme }) => theme.bg.primary};
  border-radius: 10px;
  box-shadow: 0 7px 6px 0 rgba( 33, 43, 54, .1);

  & > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    max-width: 50%;
  }
`;

export const PTitle = styled.h1`
  font-size: 3.4rem;
  color: ${({ theme }) => theme.txt.primary};
`;

export const PDescription = styled.p`
  max-width: 70%;
  margin-top: 20px;

  font-size: 1.3rem;
`;

export const PButton = styled.a`
  position: relative;
  display: flex;
  align-items: center;

  margin-top: 40px;
  padding: 7px;
  
  border-radius: 4px;
  background-color: ${({ theme }) => theme.app.primary};

  color: ${({ theme }) => theme.txt.highLight};
  font-size: 1.2rem;
  font-weight: bold;

  & > svg {
    margin-right: 5px;
  }

  transition: all 0.2s;

  &:hover {
    opacity: 0.75;
  }
`;

export const PImage = styled.img`
  max-width: 40vw;
`;
