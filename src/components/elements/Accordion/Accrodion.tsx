import { Accordion as ManAccordion, Divider } from '@mantine/core';
import React, { Children, PropsWithChildren, ReactElement } from 'react';

interface TabsItemProps {
  lable: string;
}

const Accordion = ({ children }: { children: React.ReactNode }) => (
  <div>{children}</div>
);

const AccordionTitle = ({ children }: { children: React.ReactNode }) => (
  <>{children}</>
);

const AccordionBody = ({ children }: { children: React.ReactNode }) => (
  <div className='w-full'>
    <Divider className='mt-4' size='sm' color='whiteBorder' />
    <ManAccordion
      multiple
      iconPosition='right'
      className='w-full'
      styles={{
        control: {
          '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.06)' },
        },
      }}
    >
      {Children.map(children, (child) => {
        const item = child as ReactElement<PropsWithChildren<TabsItemProps>>;

        if (item.type === AccordionItem) {
          return (
            <ManAccordion.Item
              label={
                <span className='text-2xl text-white'>{item.props.lable}</span>
              }
            >
              {item.props.children}
            </ManAccordion.Item>
          );
        } else {
          return child;
        }
      })}
    </ManAccordion>
  </div>
);

const AccordionItem = (props: { children: React.ReactNode; lable: string }) => (
  <div>{props.children}</div>
);

Accordion.Title = AccordionTitle;
Accordion.Item = AccordionItem;
Accordion.Body = AccordionBody;
export default Accordion;
