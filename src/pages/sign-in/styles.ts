import styled from 'styled-components';
import { shade } from 'polished';
import signInBackgroundImg from '../../assets/sign-in-background.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center;

  width: 100%;
  max-width: 700px;

  form {
    margin: 80px 0;
    width: 340px;
    align-items: center;
  }

  a {
    color: ${({ theme }) => theme.colors.dawnPink};
    display: block;
    text-decoration: none;
    transition: color 0.2s;
    text-align: center;

    &:hover {
      color: ${({ theme }) => shade(0.2, theme.colors.dawnPink)};
    }
  }

  > a {
    color: ${({ theme }) => theme.colors.orange};
    display: block;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: ${({ theme }) => shade(0.2, theme.colors.orange)};
    }

    svg {
      margin-right: ${({ theme }) => theme.space.x2};
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signInBackgroundImg}) no-repeat center;
  background-size: cover;
`;
