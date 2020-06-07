import React, { FC } from 'react';
import styled from 'styled-components';

interface TooltipProps {
  title: string;
  className?: string;
}

const Container = styled.div`
  position: relative;

  span {
    width: 160px;
    text-align: center;
    background: ${({ theme }) => theme.colors.orange};
    padding: ${({ theme }) => theme.space.x1};
    border-radius: 4px;
    font-size: ${({ theme }) => theme.fontSizes.x1};
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
    color: ${({ theme }) => theme.colors.lightDark};
    opacity: 0;
    transition: all 0.4s;
    visibility: hidden;

    position: absolute;
    bottom: calc(100% + 12px);

    left: 50%;
    transform: translateX(-50%);

    &::before {
      content: '';
      border-style: solid;
      border-color: ${({ theme }) => theme.colors.orange} transparent;
      border-width: 6px 6px 0 6px;
      top: 100%;
      position: absolute;

      left: 50%;
      transform: translateX(-50%);
    }
  }
  &:hover span {
    opacity: 1;
    visibility: visible;
    transition: all 0.4s;
  }
`;

export const Tooltip: FC<TooltipProps> = ({ title, className, children }) => {
  return (
    <Container className={className}>
      {children}
      <span>{title}</span>
    </Container>
  );
};
