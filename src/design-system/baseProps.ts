import { AllHTMLAttributes, ComponentType } from 'react';

export type As = keyof JSX.IntrinsicElements | ComponentType;
export type ForwardedAs = keyof JSX.IntrinsicElements | ComponentType;
export type HtmlAttrs = AllHTMLAttributes<HTMLElement> | {};
