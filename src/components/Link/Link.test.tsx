import { screen, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@/lib/__mocks__/matchMedia.mock';

import { render } from '@/lib/test-utils';

import CustomizeIcon from '@/components/Icon/CustomizeIcon';

import Link from './Link';

const linkText = 'TestLink';
const linkHref = '/link';
describe('Link', () => {
  it('Is rendering', () => {
    render(<Link href={linkHref}>{linkText}</Link>);

    expect(screen.getByTestId('link')).toBeInTheDocument();
    expect(screen.getByText(linkText)).toBeInTheDocument();
    expect(screen.queryByText('failtText')).not.toBeInTheDocument();

    expect(screen.getByRole('link')).toHaveAttribute('href', linkHref);
  });

  it('Test Icon render', () => {
    render(
      <Link href={linkHref} Icon={CustomizeIcon}>
        {linkText}
      </Link>
    );

    const linkRoot = screen.getByTestId('link');
    const icon = within(linkRoot).getByTestId('customize-icon');
    expect(icon).toBeInTheDocument();
  });
});
