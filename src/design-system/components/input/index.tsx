import React, {
  InputHTMLAttributes,
  ComponentType,
  useCallback,
  useEffect,
  useState,
  useRef,
  FC,
} from 'react';
import { IconBaseProps } from 'react-icons';
import styled, { css } from 'styled-components';
import { useField } from '@unform/core';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: ComponentType<IconBaseProps>;
}

const Container = styled.div<{ isFocused: boolean; isFilled: boolean }>`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.dark};
  border-radius: 10px;
  padding: ${({ theme }) => theme.space.x2};
  width: 100%;

  border: 2px solid ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.gray};

  ${props =>
    props.isFocused &&
    css`
      color: ${({ theme }) => theme.colors.orange};
      border: 2px solid ${({ theme }) => theme.colors.orange};
    `}

  ${props =>
    props.isFilled &&
    css`
      color: ${({ theme }) => theme.colors.orange};
    `}

  svg {
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

export const Input: FC<InputProps> = ({ name, icon: Icon, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const { fieldName, defaultValue, registerField } = useField(name);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value);
  }, []);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container isFocused={isFocused} isFilled={isFilled}>
      {Icon && <Icon size={20} />}
      <Component
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        defaultValue={defaultValue}
        ref={inputRef}
        {...rest}
      />
    </Container>
  );
};
