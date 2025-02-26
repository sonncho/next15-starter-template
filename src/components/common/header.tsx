import React from 'react';

import Link from 'next/link';

const MENU = [
  { name: 'Menu1', href: '/menu1' },
  { name: 'Menu2', href: '/menu2' },
  { name: 'Menu3', href: '/menu3' },
];

export default function Header() {
  return (
    <header className="flex items-center justify-between border-b-2 border-gray-200 px-6 py-4">
      <div className="text-2xl font-bold">
        <Link href="/" className="text-blue-500 hover:text-blue-700">
          Logo
        </Link>
      </div>
      <nav>
        <ul className="flex items-center space-x-5">
          {MENU.map((item) => (
            <li key={item.href} className="text-sm font-semibold text-gray-800 hover:text-gray-800">
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
