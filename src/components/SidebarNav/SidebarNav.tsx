import { Link, useLocation } from 'react-router-dom';

import { cn } from '@/lib/utils';

interface NavItem {
  title: string;
  label?: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  items?: NavItem[];
}

const navItems: NavItem[] = [
  {
    title: 'Getting Started',
    items: [
      {
        title: 'Welcome',
        href: '/docs',
      },
      {
        title: 'Introduction',
        href: '/docs/introduction',
      },
      {
        title: 'Installation',
        href: '/docs/installation',
      },
    ],
  },
  {
    title: 'Design',
    items: [
      {
        title: 'Design-System',
        href: '/docs/design-system',
      },
    ],
  },
];

export function SidebarNav() {
  const { pathname } = useLocation();

  return (
    <div className="w-full">
      {navItems.map((item, index) => (
        <div key={index} className="pb-6">
          <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold">{item.title}</h4>
          <SidebarNavItems items={item.items} pathname={pathname} />
        </div>
      ))}
    </div>
  );
}

interface SidebarNavItemsProps {
  items?: NavItem[];
  pathname?: string | null;
}
export function SidebarNavItems({ items, pathname }: SidebarNavItemsProps) {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div className="grid grid-flow-row auto-rows-max text-sm">
      {items.map((item, index) =>
        item.href ? (
          <Link
            key={index}
            to={item.href}
            className={cn(
              'group flex w-full items-center rounded-md py-1.5 px-2 hover:bg-slate-50',
              item.disabled && 'cursor-not-allowed opacity-60',
              pathname === item.href && 'bg-slate-100'
            )}
            target={item.external ? '_blank' : ''}
            rel={item.external ? 'noreferrer' : ''}
          >
            {item.title}
            {item.label && (
              <span className="ml-2 rounded-md bg-blue-100 px-1.5 py-0.5 text-sm no-underline group-hover:no-underline">
                {item.label}
              </span>
            )}
          </Link>
        ) : (
          <span
            key={index}
            className="flex w-full cursor-not-allowed items-center rounded-md p-2 opacity-60 hover:underline"
          >
            {item.title}
          </span>
        )
      )}
    </div>
  );
}
