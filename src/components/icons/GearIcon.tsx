import { motion } from 'framer-motion';
import React from 'react';

import { IconProps } from '@/types/icon.types';

export default function GearIcon({
  size = 10,
  color = 'white',
  animate = true,
  animationState = false,
}: IconProps) {
  const variants = {
    idle: { y: 0, transition: { duration: 1.2 } },
    hover: {
      y: [0, 3, 0],
      transition: {
        duration: 0.4,
        type: 'spring',
        damping: 2,
        stiffness: 150,
        repeat: 1,
      },
    },
  };

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      initial='idle'
      animate={animate ? (animationState ? 'hover' : '') : ''}
      variants={variants}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M13.8712 5.08249L13.4562 4.36243C13.1052 3.75315 12.3272 3.54296 11.7171 3.89256V3.89256C11.4267 4.06364 11.0801 4.11218 10.7539 4.02747C10.4276 3.94276 10.1485 3.73176 9.97798 3.441C9.86829 3.25618 9.80935 3.04568 9.80711 2.83077V2.83077C9.81701 2.48623 9.68702 2.15235 9.44676 1.90519C9.20651 1.65804 8.87644 1.51866 8.53175 1.5188H7.69575C7.35806 1.5188 7.03429 1.65336 6.79608 1.89271C6.55787 2.13207 6.42486 2.45648 6.42649 2.79416V2.79416C6.41648 3.49136 5.8484 4.05129 5.15113 4.05122C4.93622 4.04898 4.72572 3.99004 4.5409 3.88035V3.88035C3.93079 3.53076 3.15282 3.74094 2.80177 4.35023L2.35631 5.08249C2.00569 5.69101 2.21301 6.46849 2.82008 6.82162V6.82162C3.21468 7.04944 3.45777 7.47047 3.45777 7.92612C3.45777 8.38177 3.21468 8.8028 2.82008 9.03062V9.03062C2.21379 9.38137 2.00623 10.157 2.35631 10.7636V10.7636L2.77737 11.4898C2.94185 11.7866 3.21782 12.0056 3.54421 12.0984C3.8706 12.1911 4.22051 12.15 4.5165 11.9841V11.9841C4.80747 11.8143 5.15421 11.7678 5.47964 11.8549C5.80508 11.942 6.08224 12.1554 6.24952 12.4479C6.35921 12.6327 6.41815 12.8432 6.42039 13.0581V13.0581C6.42039 13.7624 6.99139 14.3334 7.69575 14.3334H8.53175C9.23374 14.3335 9.80376 13.7662 9.80711 13.0642V13.0642C9.80548 12.7254 9.93933 12.4001 10.1789 12.1606C10.4184 11.921 10.7437 11.7872 11.0825 11.7888C11.2969 11.7946 11.5065 11.8533 11.6927 11.9597V11.9597C12.3012 12.3103 13.0787 12.103 13.4318 11.4959V11.4959L13.8712 10.7636C14.0413 10.4717 14.0879 10.1241 14.0009 9.79766C13.9138 9.47124 13.7002 9.19298 13.4074 9.02452V9.02452C13.1146 8.85605 12.901 8.5778 12.814 8.25138C12.7269 7.92495 12.7736 7.57729 12.9437 7.28539C13.0542 7.0923 13.2143 6.93221 13.4074 6.82162V6.82162C14.0108 6.46868 14.2177 5.69574 13.8712 5.08859V5.08859V5.08249Z'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <ellipse
        cx='8.11681'
        cy='7.92614'
        rx='1.75744'
        ry='1.75744'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </motion.svg>
  );
}
