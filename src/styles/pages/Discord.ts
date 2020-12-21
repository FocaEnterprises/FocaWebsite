/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.main`
  min-height: 100vh;

  background-color: ${({ theme }) => theme.bg.secondary};
`;
