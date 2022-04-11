import React from 'react';

import clsxm from '@/lib/clsxm';

interface FiltersPickerTextProps {
  isActive?: boolean;
  text?: string;
}

export default function FiltersPickerText({
  text,
  isActive,
}: FiltersPickerTextProps) {
  return (
    <div
      className={clsxm(
        'cursor-pointer rounded-full border-2 border-solid border-[#5c5c5c] bg-[#060606] px-4 py-1 text-white',
        isActive ? 'border-white' : ''
      )}
    >
      {text}
    </div>
  );
}
