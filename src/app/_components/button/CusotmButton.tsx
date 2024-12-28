import { ButtonProps } from '@/app/types/button.types';
import classNames from 'classnames';
import React from 'react';

const CusotmButton: React.FC<ButtonProps> = ({
  type,
  isDisabled = false,
  icon,
  title,
  variant = 'primary',
  className,
  ...rest
}) => {
  const classes = classNames('btn', className, { [`btn-${variant}`]: variant });
  return (
    <button type={type} disabled={isDisabled} className={classes} {...rest}>
      {icon}
      {title&&<span className="text-sm font-semibold leading-6 ">{title}</span>}
    </button>
  );
};

export default CusotmButton;
