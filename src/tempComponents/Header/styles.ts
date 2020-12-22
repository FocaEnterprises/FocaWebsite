import styled, { DefaultTheme } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 45px;
  height: 74px;
  
  background-color: ${({ theme }) => theme.bg.primary};
  box-shadow: 0 7px 6px 0 rgba( 33, 43, 54, .04);
  
  overflow: hidden;
  
  @media (max-width: 1000px) {
    flex-direction: column;
    min-height: 74px;
    height: auto;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;

  font-size: 2.2rem;
  font-family: 'Ubuntu', sans-serif;
  font-weight: bold;
  color: ${({ theme }) => theme.app.primary};

  user-select: none;
`;

export const Nav = styled.nav`
  height: 100%;
  display: flex;
  align-items: center;
`;

export const NavItem = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  margin: 0 20px;

  height: 100%;

  color: ${({ theme, isSelected }: { theme: DefaultTheme, isSelected?: boolean }) => (
    isSelected ? theme.txt.primary : theme.txt.secondary)};
  font-size: 1.2rem;
  font-weight: bold;

  transition: all 0.15s;

  &::after {
    content: "";
    /* display: ${({ isSelected }: { isSelected?: boolean }) => (isSelected ? 'block' : 'none')}; */
    display: block;
    position: absolute;
    bottom: -5px;
    left: calc(50% - 15px);

    height: 10px;
    width: ${({ isSelected }: { isSelected?: boolean }) => (isSelected ? '30px' : '0')};

    border-radius: 10px;
    background: ${({ theme }) => theme.app.secondary};

    transition: all 0.2s;
  }

  &:hover {
    opacity: ${({ isSelected }: { isSelected?: boolean }) => (isSelected ? 1 : 0.75)};

    &::after {
      display: block;
      left: calc(50% - 25px);

      width: 50px;
    }
  }

  @media (max-width: 1000px) {
    min-height: 48px;
  }
`;
