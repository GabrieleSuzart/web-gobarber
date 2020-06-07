import React, { FC, ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';
import { shade } from 'polished';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Component = styled.button`
  background: ${({ theme }) => theme.colors.orange};
  height: 56px;
  border-radius: 10px;
  border: 0;
  color: ${({ theme }) => theme.colors.lightDark};
  padding: 0 ${({ theme }) => theme.space.x2};
  width: 100%;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  transition: background-color 0.2s;

  &:hover {
    background: ${({ theme }) => shade(0.2, theme.colors.orange)};
  }
`;

export const Button: FC<ButtonProps> = ({ children, ...rest }) => (
  <Component type="button" {...rest}>
    {children}
  </Component>
);
