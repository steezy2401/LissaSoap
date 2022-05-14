import React from 'react';

type TabProps = {
  title: string;
  showCounter?: boolean;
  counter?: number;
  active?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
};

export default TabProps;
