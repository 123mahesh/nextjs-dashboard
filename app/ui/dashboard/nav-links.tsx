'use client';

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  TagIcon,
  UserPlusIcon,
  UserMinusIcon,
  CurrencyDollarIcon,
  CurrencyRupeeIcon,
  RectangleGroupIcon
} from '@heroicons/react/24/outline';
import { Client } from '@vercel/postgres';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Invoices',
    href: '/dashboard/invoices',
    icon: DocumentDuplicateIcon, 
  },
  { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
  { name: 'Item Master', href: '/dashboard/item', icon: TagIcon },
  { name: 'Supplier', href: '/dashboard/supplier', icon: UserPlusIcon },
  { name: 'Purchase', href: '/dashboard/purchase', icon: CurrencyDollarIcon },
  { name: 'Sales', href: '/dashboard/sales', icon:  CurrencyRupeeIcon},
  { name: 'Competitors', href: '/dashboard/competitor', icon: UserMinusIcon },
  { name: 'Posts', href: '/dashboard/posts', icon: ChatBubbleOvalLeftEllipsisIcon },
  { name: 'SG&A', href: '/dashboard/sga', icon: RectangleGroupIcon },
];

export default function NavLinks() {
  const pathname = usePathname(); 
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': pathname === link.href,
              },
            )}>
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
