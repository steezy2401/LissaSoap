import React from 'react';
import { FiShare2 } from 'react-icons/fi';

import clsxm from '@/lib/clsxm';

export default function Share({
  className,
  size,
}: {
  className?: string;
  size: number;
}) {
  return (
    <div className={clsxm('cursor-pointer p-2', className)}>
      <FiShare2 size={size} color='white' />
    </div>
  );
}
