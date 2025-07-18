'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ExitNavigationButton, PrimaryNavigationButton } from '../base/button';
import Image from 'next/image';
import logoImage from "@/../public/assets/images/logo.png";
import { useRouter } from 'next/navigation';

interface NavItem {
  title: string;
  href: string;
}

const navItems: NavItem[] = [
  { title: 'خانه', href: '/' },
  { title: 'آموزش', href: '/#instructions' },
  { title: 'سوالات متداول', href: '/#questions' },
  { title: 'درباره ما', href: '/about' },
];

export default function Navbar() {
  const router = useRouter();

  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [hash, setHash] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHash(window.location.hash);
    }
  }, [pathname]);

  return (
    <nav className="fixed w-full z-20 top-0 start-0">
      <div className="bg-gray-50 flex flex-wrap items-center justify-between mx-auto p-6">
        <Link href="/" className="flex items-center space-x-3">
          <Image src={logoImage} alt="لوگو" className="w-25" />
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0">
          <PrimaryNavigationButton
            title="ثبت‌نام | ورود"
            href="/dashboard"
            className="hidden md:flex justify-center w-[150px]"
          />
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="relative w-10 h-10 flex flex-col justify-center items-center md:hidden"
            aria-label="Toggle Menu"
          >
            <span
              className={`absolute h-[2px] w-6 bg-gray-700 transform transition duration-300 ease-in-out ${isOpen ? 'rotate-45' : '-translate-y-2'
                }`}
            />
            <span
              className={`absolute h-[2px] w-6 bg-gray-700 transition-all duration-200 ease-in-out ${isOpen ? 'opacity-0' : 'opacity-100'
                }`}
            />
            <span
              className={`absolute h-[2px] w-6 bg-gray-700 transform transition duration-300 ease-in-out ${isOpen ? '-rotate-45' : 'translate-y-2'
                }`}
            />
          </button>
        </div>
        <div className={`${isOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1`}>
          <ul className="flex flex-col md:flex-row py-5 md:py-0 md:space-x-8 font-medium">
            {navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href.startsWith('/#') && pathname === '/' && hash === item.href.replace('/', ''));

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`block py-2 px-3 rounded-sm transition-all duration-200 ${isActive && !item.href.startsWith('/#')
                      ? 'text-secondary-500 font-semibold'
                      : 'text-gray-600'
                      } ${!item.href.startsWith('/#') ? 'hover:text-primary-400' : ''}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
          <PrimaryNavigationButton
            title="ثبت‌نام | ورود"
            href="/dashboard"
            className="md:hidden w-full"
          />
        </div>
      </div>
      <Link href="./form/default/new">
        <div className='bg-primary-300 p-5'>
          <p className='text-gray-50 text-center text-xl font-semibold'>
            اگر دنبال خرید هوشمندانه‌تر هستید، همین حالا نیاز خود را ثبت کنید.
          </p>
        </div>
      </Link>
    </nav>
  );
}
