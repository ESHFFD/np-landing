import { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isDisabled?: boolean;
  icon?: ReactNode;
  title?: string;
  variant?: 'primary' | 'secondary' | 'outline';
};
