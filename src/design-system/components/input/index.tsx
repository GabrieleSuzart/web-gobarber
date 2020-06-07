import React, { FC, InputHTMLAttributes, ComponentType } from 'react';
import { IconBaseProps } from 'react-icons';
import styled from 'styled-components';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: ComponentType<IconBaseProps>;
}

const Container = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.dark};
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.colors.dark};
  padding: ${({ theme }) => theme.space.x2};
  width: 100%;

  svg {
    color: ${({ theme }) => theme.colors.gray};
    margin-right: ${({ theme }) => theme.space.x2};
  }
`;

const Component = styled.input`
  flex: 1;
  background: transparent;
  border: 0;
  color: ${({ theme }) => theme.colors.dawnPink};

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray};
  }
`;

export const Input: FC<InputProps> = ({ icon: Icon, ...rest }) => (
  <Container>
    {Icon && <Icon size={20} />}
    <Component {...rest} />
  </Container>
);
