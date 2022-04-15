import { useClickOutside, useDisclosure } from '@mantine/hooks';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

import { TOrderItems } from '@/types/dropdown.types';

interface FiltersSortProps {
  handlePick: (order: TOrderItems) => void;
  orderItems: TOrderItems[];
}

export default function FiltersSort({
  orderItems,
  handlePick = () => void 1,
}: FiltersSortProps) {
  const [opened, handlers] = useDisclosure(false);
  const ref = useClickOutside(() => handlers.close());

  const [order, setOrder] = useState<TOrderItems>(orderItems[0]);

  useEffect(() => {
    handlePick(order);
  }, [order, handlePick]);

  const variants = {
    idle: { y: -10, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div
      className='flex cursor-pointer gap-3'
      onClick={() => handlers.toggle()}
      ref={ref}
    >
      <div className='flex items-center justify-center'>
        <span className='select-none text-lg font-semibold text-lightGray'>
          Sort by:
        </span>
      </div>
      <div className='relative'>
        <div className='flex h-full items-center justify-center'>
          <span className='select-none text-lg font-semibold text-white'>
            {order.title}
          </span>
        </div>
        {opened && (
          <div className='absolute flex flex-col  text-white'>
            {orderItems.map(
              ({ title, field, type }, index) =>
                order.title != title && (
                  <motion.div
                    variants={variants}
                    initial='idle'
                    animate='show'
                    transition={{
                      delay: (index - 1) * 0.1,
                      duration: 0.8,
                      type: 'spring',
                      bounce: 0.5,
                    }}
                    key={`order-${field}-${title}-${index}`}
                    onClick={() => setOrder({ field, title, type })}
                  >
                    <span>{title}</span>
                  </motion.div>
                )
            )}
          </div>
        )}
      </div>
    </div>
  );
}
