import styled from 'styled-components';

export const Container = styled.main`
  min-height: 100vh;

  background-color: ${({ theme }) => theme.bg.secondary};
`;

export const Panel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 25px 40px;
  
  @media (max-width: 768px) {
    margin: 25px 20px;
  }
`;

export const PTitle = styled.h1`
  font-size: 3.4rem;
  color: ${({ theme }) => theme.txt.primary};
`;

export const PDescription = styled.p`
  font-size: 1.4rem;
`;

export const ProjectsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 25px;
  
  margin-top: 30px;
  
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
  }
  
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;

    width: 100%;
  }
`;

export const ProjectItem = styled.li`
  display: flex;
  flex-direction: column;

  padding: 15px;
  max-width: 1fr;

  background-color: ${({ theme }) => theme.bg.primary};
  border-radius: 10px;
  box-shadow: 0 5px 6px 0 rgba(33, 43, 54, .1);
  list-style: none;
`;

export const ProjectTitle = styled.h4`
  position: relative;

  color: ${({ theme }) => theme.txt.primary};
  font-size: 1.3rem;
  font-weight: bold;

  &::before {
    position: absolute;
    top: calc(50% - 20px);
    left: calc(-15px - calc(7px / 2));

    height: 40px;
    width: 7px;
    
    content: '';
    background-color: ${({ theme }) => theme.app.primary};
    border-radius: 11px;
    box-shadow: 0 0 8px 0 rgba(52, 203, 121, 0.4);
  }
`;

export const ProjectDescription = styled.span`
  margin-top: 15px;

  font-size: 1.1rem;
`;

export const ProjectTags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  
  margin-top: 15px;
`;

export const ProjectTag = styled.li`
  position: relative;

  margin: 0 3px 3px 0;
  padding: 1px 4px;
  padding-left: 18px;
  height: max-content;
  
  border: solid 1px;
  border-radius: 10px;
  border-color: ${({ color }) => color};
  
  color: ${({ color }) => color};
  line-height: 18px;
  font-size: 1rem;

  list-style: none;

  &::before {
    content: '';
    height: 14px;
    width: 14px;
    border-radius: 11px;
    background-color: ${({ color }) => color};
    position: absolute;
    top: calc(50% - 7px);
    left: 2px;
  }
`;
