import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import { Container, Content, Background, InputGroup } from './styles';
import { Stack, Text } from '../../design-system';

export const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="Go Barber" />

      <form>
        <Stack margin="x3">
          <Text as="h1" textSize="x4" textAlign="center">
            Faça seu logon
          </Text>
          <Stack margin="x1">
            <InputGroup>
              <FiMail size={20} />
              <input type="email" placeholder="E-mail" />
            </InputGroup>

            <InputGroup>
              <FiLock size={20} />
              <input type="password" placeholder="Senha" />
            </InputGroup>
          </Stack>
          <Stack>
            <button type="submit">Entrar</button>

            <a href="forgot">Esqueci minha senha</a>
          </Stack>
        </Stack>
      </form>

      <a href="signup">
        <FiLogIn />
        Criar conta
      </a>
    </Content>
    <Background />
  </Container>
);
