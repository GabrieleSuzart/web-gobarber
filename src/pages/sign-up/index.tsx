import React from 'react';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';
import { Form } from '@unform/web';

import logoImg from '../../assets/logo.svg';
import { Container, Content, Background } from './styles';
import { Stack, Text, Input, Button } from '../../design-system';

export const SignUp: React.FC = () => {
  const handleSubmit = (data: object): void => {
    console.log(data);
  };

  return (
    <Container>
      <Background />
      <Content>
        <img src={logoImg} alt="Go Barber" />

        <Form onSubmit={handleSubmit}>
          <Stack margin="x3">
            <Text as="h1" textSize="x4" textAlign="center">
              Faça seu cadastro
            </Text>
            <Stack margin="x1">
              <Input name="user" icon={FiUser} type="text" placeholder="Nome" />

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
            <Button type="submit">Cadastrar</Button>
          </Stack>
        </Form>

        <a href="signup">
          <FiArrowLeft />
          Voltar para logon
        </a>
      </Content>
    </Container>
  );
};
