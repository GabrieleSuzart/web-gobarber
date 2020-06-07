import React, { useCallback } from 'react';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import logoImg from '../../assets/logo.svg';
import { Container, Content, Background } from './styles';
import { Stack, Text, Input, Button } from '../../design-system';

export const SignUp: React.FC = () => {
  const handleSubmit = useCallback(async (data: object) => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string().required('E-mail obrigatório').email(),
        password: Yup.string().min(6, 'No mínimo 6 dígitos'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      console.log('Erro ao preencher formulário', err);
    }
  }, []);

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
