import { LinkVariants } from '@/types/link.types';

interface NavItems {
  href: string;
  label: string;
  variant: LinkVariants;
}

const navItems: NavItems[] = [
  { href: '/soap', label: 'Soap', variant: 'default' },
  { href: '/collections', label: 'Collections', variant: 'default' },
  { href: '/custom', label: 'Custom', variant: 'highlight' },
];

export default navItems;
