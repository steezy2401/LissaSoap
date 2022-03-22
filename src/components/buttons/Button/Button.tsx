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
} & React.ComponentPropsWithRef<'button'>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    className,
    disabled,
    isLoading,
    size = 'lg',
    variant = 'filled',
    color = 'main',
    children,
    onClick,
    ...rest
  }) => {
    const [coords, setCoords] = React.useState({ x: -1, y: -1 });
    const [isRippling, setIsRippling] = React.useState(false);

    React.useEffect(() => {
      if (coords.x !== -1 && coords.y !== -1) {
        setIsRippling(true);
        setTimeout(() => setIsRippling(false), 300);
      } else setIsRippling(false);
    }, [coords]);

    React.useEffect(() => {
      if (!isRippling) setCoords({ x: -1, y: -1 });
    }, [isRippling]);

    return (
      <MantineButton
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
          const node = e.target as HTMLElement;
          const rect = node.getBoundingClientRect();
          setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
          onClick && onClick(e);
        }}
        sx={{
          '&:not(:disabled):active': {
            transform: 'translateY(0px) scale(0.95)',
          },
        }}
        {...rest}
      >
        {isRippling ? (
          <span
            className='ripple'
            style={{
              left: coords.x,
              top: coords.y,
            }}
          />
        ) : (
          ''
        )}
        <span className='z-2 relative'>{children}</span>
      </MantineButton>
    );
  }
);

export default Button;
