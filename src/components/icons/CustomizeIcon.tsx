import { motion } from 'framer-motion';
import React from 'react';

import { IconProps } from '@/types/icon.types';

export default function CustomizeIcon({
  size = 10,
  animate = true,
  animationState = false,
}: IconProps) {
  const variants = {
    idle: { rotate: 0, transition: { duration: 1.2 } },
    hover: {
      rotate: 120,
      transition: { duration: 1.2 },
    },
  };

  return (
    <motion.div
      initial='idle'
      animate={animate ? (animationState ? 'hover' : '') : ''}
      variants={variants}
      transition={{ duration: 1.2 }}
    >
      <svg
        width={size}
        height={size}
        viewBox='0 0 19 19'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M4.41929 10.0688C2.73013 7.89138 1.46349 5.40215 0.69971 2.72893C0.520103 2.1003 1.10129 1.51912 1.72991 1.69872C4.40314 2.4625 6.89236 3.72914 9.0698 5.41831L13.4107 1.07741C13.7361 0.751969 14.2638 0.751969 14.5892 1.07741L17.9226 4.41074C18.248 4.73618 18.248 5.26381 17.9226 5.58925L13.5767 9.93506L14.5566 11.0374C16.2937 12.2403 17.3333 14.2203 17.3333 16.338V17.5C17.3333 17.9602 16.9602 18.3333 16.5 18.3333H15.3379C13.2183 18.3333 11.2365 17.2917 10.034 15.5517L8.93605 14.5758L5.42255 18.0893C5.26627 18.2455 5.05431 18.3333 4.83329 18.3333H1.49996C1.03972 18.3333 0.666628 17.9602 0.666628 17.5V14.1667C0.666628 13.9456 0.754425 13.7337 0.910706 13.5774L4.41929 10.0688ZM5.49495 11.3502L2.33329 14.5118V16.6667H4.48812L7.68821 13.4666L7.14836 12.9867C6.56655 12.4695 6.01482 11.9231 5.49495 11.3502ZM10.3512 6.49396C10.9241 7.01384 11.4705 7.56556 11.9877 8.14738L12.4676 8.68722L14.0714 7.08333L11.9166 4.92851L10.3512 6.49396ZM13.0951 3.74999L15.25 5.90482L16.1548 5L14 2.84517L13.0951 3.74999ZM10.634 13.8551L12.8561 11.633L10.742 9.25465C8.5742 6.81587 5.84926 4.94972 2.80957 3.80859C3.95071 6.84827 5.81685 9.57322 8.25564 11.741L10.634 13.8551ZM15.6666 16.338C15.6666 14.9666 15.0787 13.6731 14.0718 12.7733L11.7733 15.0718C12.6731 16.0787 13.9666 16.6667 15.3379 16.6667H15.6666V16.338Z'
          fill='url(#paint0_linear_534_1845)'
        />
        <defs>
          <linearGradient
            id='paint0_linear_534_1845'
            x1='1.0944'
            y1='2.24877'
            x2='19.4151'
            y2='3.82534'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#00D1FF' />
            <stop offset='1' stopColor='#54A1D8' />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
}
