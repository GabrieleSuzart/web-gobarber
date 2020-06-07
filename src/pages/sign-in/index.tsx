import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import { Container, Content, Background } from './styles';
import { Stack, Text, Input, Button } from '../../design-system';

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
            <Input
              name="email"
              icon={FiMail}
              type="email"
              placeholder="E-mail"
            />

            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Senha"
            />
          </Stack>
          <Stack>
            <Button type="submit">Entrar</Button>

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
