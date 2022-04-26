import {
  Button as MantineButton,
  ButtonVariant,
  MantineSize,
} from '@mantine/core';
import * as React from 'react';

import clsxm from '@/lib/clsxm';

enum ButtonColors {
  'blue',
  'green',
  'red',
  'violet',
}

type ButtonProps = {
  size?: MantineSize;
  isLoading?: boolean;
  variant?: ButtonVariant;
  color?: keyof typeof ButtonColors;
  icon?: JSX.Element;
} & React.ComponentPropsWithRef<'button'>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      disabled,
      isLoading,
      size = 'lg',
      variant = 'filled',
      color = 'main',
      children,
      onClick,
      icon,
      ...rest
    },
    ref
  ) => {
    return (
      <MantineButton
        ref={ref}
        leftIcon={icon}
        variant={variant}
        size={size}
        color={color}
        disabled={disabled}
        loading={isLoading}
        radius={15}
        gradient={{ from: 'cyan', to: 'pink' }}
        className={clsxm(
          'font-primary',
          'border-2',
          'px-10',
          'relative overflow-hidden',
          'transition-all duration-75 ease-in-out',
          className
        )}
        onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
          onClick && onClick(e);
        }}
        sx={{
          '&:not(:disabled):active': {
            transform: 'translateY(0px) scale(0.95)',
          },
        }}
        {...rest}
      >
        <span className='z-2 relative'>{children}</span>
      </MantineButton>
    );
  }
);

export default Button;
