import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: "cr lg ct";

  padding: 0 45px;
  margin-top: auto;
  height: 74px;
  
  background-color: ${({ theme }) => theme.bg.primary};
  box-shadow: 0 -7px 6px 0 rgba( 33, 43, 54, .04);
  
  overflow: hidden;
  
  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    min-height: 74px;
    padding: 15px;
    height: auto;
  }
`;

export const Logo = styled.div`
  grid-area: lg;
  display: flex;
  align-items: center;

  margin: 0 auto;

  font-size: 2.2rem;
  font-family: 'Ubuntu', sans-serif;
  font-weight: bold;
  color: ${({ theme }) => theme.app.primary};

  user-select: none;
`;

export const Creator = styled.span`
  grid-area: cr;

  font-size: 1.2rem;
  font-family: 'Ubuntu', sans-serif;
  color: ${({ theme }) => theme.txt.primary};

  & > a {
    color: ${({ theme }) => theme.app.secondary};
    font-style: italic;
  }

  @media (max-width: 1000px) {
    margin: 0 auto;
    margin-top: 7px;
  }
`;

export const Contacts = styled.div`
  grid-area: ct;
  display: flex;
  flex-direction: row;

  margin-left: auto;

  @media (max-width: 1000px) {
    margin: 0 auto;
    margin-top: 10px;
  }
`;

export const ContactsItem = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0 7px;
  padding: 7px;

  border: solid 2px ${({ theme }) => theme.app.primary};
  border-radius: 50%;

  color: ${({ theme }) => theme.app.primary};

  transition: all 0.2s;

  &:hover {
    color: ${({ theme }) => theme.bg.primary};
    
    background-color: ${({ theme }) => theme.app.primary};
    box-shadow: 0 3px 8px 0 rgba(33, 43, 54, .25);
  }
`;
