/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  min-height: 100vh;
  
  background-color: ${({ theme }) => theme.bg.secondary};
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: max-content 1fr max-content;
  grid-template-areas:
    "ti ti"
    "in tg"
    "sb sb";

  width: 80%;
  max-width: 1300px;
  margin: 25px auto;
  padding: 40px;

  background-color: ${({ theme }) => theme.bg.primary};
  border-radius: 10px;
  box-shadow: 0 7px 6px 0 rgba( 33, 43, 54, .1);
`;

export const Panel = styled.div`
  grid-area: in;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  grid-area: ti;

  margin-bottom: 20px;

  color: ${({ theme }) => theme.txt.primary};
  text-align: center;
  font-family: 'Ubuntu', sans-serif;
  font-size: 2.2rem;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  
  width: 75%;
  max-width: 400px;
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const InputTitle = styled.span`
  color: ${({ theme }) => theme.txt.primary};
  font-family: 'Ubuntu', sans-serif;
  font-size: 1.4rem;
`;

export const Input = styled.input`
  padding: 5px;
  
  border-radius: 8px;
  border: solid 1px rgba(0, 0, 0, 0.03);
  background-color: ${({ theme }) => theme.bg.secondary};

  color: ${({ theme }) => theme.txt.secondary};
  font-size: 1.2rem;

  transition: 0.1s;
  
  &:focus {
    color: ${({ theme }) => theme.txt.primary};
  }
`;

export const TextArea = styled.textarea`
  padding: 5px;
  max-width: 100%;
  min-width: 100%;
  width: 100%;
  max-height: 300px;
  min-height: 200px;
  
  border-radius: 8px;
  border: solid 1px rgba(0, 0, 0, 0.03);
  background-color: ${({ theme }) => theme.bg.secondary};

  color: ${({ theme }) => theme.txt.secondary};
  font-size: 1.2rem;
  font-family: 'Roboto', sans-serif;

  transition: 0.1s;

  &:focus {
    color: ${({ theme }) => theme.txt.primary};
  }
`;

export const Button = styled.button`
  grid-area: sb;
  position: relative;
  display: flex;
  align-items: center;

  margin: 15px auto;
  padding: 7px;
  
  border: none;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.app.primary};

  color: ${({ theme }) => theme.txt.highLight};
  font-size: 1.4rem;

  cursor: pointer;
  transition: all 0.2s;

  & > svg {
    margin-right: 5px;
  }

  &:hover {
    opacity: 0.75;
    box-shadow: 0 0 8px 0 rgba( 0, 0, 0, .54);
  }
`;

export const Tags = styled.div`
  grid-area: tg;
  display: flex;
  
  padding: 5px;
  min-height: 250px;
  height: 100%;

  border-radius: 10px;
  border: solid 1px rgba(0, 0, 0, .1);

  overflow: hidden;
`;

const TagsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 50%;

  list-style: none;
  overflow-y: auto;
  
  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: none;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.3);
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.5);
  }
`;

export const TagsLabel = styled.li`
  padding-bottom: 3px;
  margin-bottom: 5px;
  
  width: 100%;

  border-bottom: solid 1px rgba(0, 0, 0, .1) !important;

  color: ${({ theme }) => theme.txt.primary} !important;
  font-family: 'Ubuntu', sans-serif;
  font-size: 1.4rem;
`;

export const AllTags = styled(TagsContainer)`
  margin-right: 3px;

  border-right: solid 1px rgba(0, 0, 0, .1);
`;

export const SelectedTags = styled(TagsContainer)`
  & > li:hover {
    color: #FF0000;
    border-color: #FF0000;

    &::before {
      background-color: #FF0000;
    }
  }
`;

export const Tag = styled.li`
  position: relative;

  margin-top: 3px;
  padding: 1px 4px;
  padding-left: 18px;
  height: max-content;
  
  border: solid 1px;
  border-radius: 10px;
  border-color: ${({ color }) => color};
  
  color: ${({ color }) => color};
  line-height: 18px;
  font-size: 1rem;

  cursor: pointer;
  transition: 0.2s;

  &::before {
    position: absolute;
    top: calc(50% - 7px);
    left: 2px;
    
    height: 14px;
    width: 14px;
    
    border-radius: 11px;
    background-color: ${({ color }) => color};

    content: '';
    transition: 0.2s;
  }
`;

export const BackButton = styled.div`
  position: absolute;
  left: 20px;
  top: 20px;

  & > a {
    display: flex;
    align-items: center;

    color: ${({ theme }) => theme.txt.secondary};
    font-size: 1.4rem;

    transition: 0.2s;

    &:hover {
      color: ${({ theme }) => theme.txt.primary};
    }
  }
`;
