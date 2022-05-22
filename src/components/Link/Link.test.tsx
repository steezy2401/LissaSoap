/* eslint-disable no-console */
import { screen, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@/lib/__mocks__/matchMedia.mock';

import { render } from '@/lib/test-utils';
import { checkAccessibility } from '@/lib/test-utils/checkAccessibility';

import CustomizeIcon from '@/components/Icon/CustomizeIcon';

import Link from './Link';

const linkText = 'TestLink';
const linkHref = '/link';

const originalError = console.error;
beforeAll(() => {
  console.error = (...args) => {
    if (/Warning.*not wrapped in act/.test(args[0])) {
      return;
    }
    originalError.call(console, ...args);
  };
});

afterAll(() => {
  console.error = originalError;
});
describe('Link', () => {
  checkAccessibility([
    <Link key={1} href={linkHref}>
      {linkText}
    </Link>,
  ]);
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
