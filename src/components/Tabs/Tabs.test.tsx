import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import '@/lib/__mocks__/matchMedia.mock';

import { render, screen } from '@/lib/test-utils';

import Tabs from './Tabs';

describe('Tab', () => {
  it('Is rendering', () => {
    render(
      <Tabs>
        <Tabs.Tab title='Tab_1'>Content_1</Tabs.Tab>
        <Tabs.Tab title='Tab_2'>Content_2</Tabs.Tab>
      </Tabs>
    );

    expect(screen.getByText('Tab_1')).toBeInTheDocument();
    expect(screen.getByText('Tab_2')).toBeInTheDocument();
    expect(screen.getByText('Content_1')).toBeInTheDocument();
    expect(screen.queryByText('Content_2')).not.toBeInTheDocument();
  });

  it('Is switching tabs', async () => {
    const user = userEvent.setup();
    render(
      <Tabs>
        <Tabs.Tab title='Tab_1'>Content_1</Tabs.Tab>
        <Tabs.Tab title='Tab_2'>Content_2</Tabs.Tab>
      </Tabs>
    );

    await user.click(screen.getByText('Tab_2'));

    expect(screen.queryByText('Content_1')).not.toBeInTheDocument();
    expect(screen.getByText('Content_2')).toBeInTheDocument();
  });
});
