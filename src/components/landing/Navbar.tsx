'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { TinyButton } from '../base/button'
import Image from 'next/image'
import logoImage from "@/../public/assets/images/logo.png";

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [hash, setHash] = useState('')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHash(window.location.hash)
    }
  }, [pathname])

  const navItems = [
    { title: 'خانه', href: '/' },
    { title: 'آموزش', href: '/#instructions' },
    { title: 'سوالات متداول', href: '/#questions' },
    { title: 'درباره ما', href: '/about' },
  ]

  return (
    <nav className="fixed w-full z-20 top-0 start-0 lg:py-5">
      <div className="bg-gray-50 lg:rounded-lg lg:w-[80%] flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3">
          {/* <span className="self-center text-2xl font-semibold whitespace-nowrap">SupplyNex</span> */}
          <Image
            src={logoImage}
            alt="عکس کاربر"
            className="w-25"
          />
        </Link>

        <div className="flex md:order-2 space-x-3 md:space-x-0">
          <TinyButton title="ورود" href="/dashboard" />
          <button
            type="button"
            className="relative w-10 h-10 flex flex-col justify-center items-center md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className={`absolute h-[2px] w-6 bg-gray-700 transform transition duration-300 ease-in-out ${isOpen ? 'rotate-45' : '-translate-y-2'}`} />
            <span className={`absolute h-[2px] w-6 bg-gray-700 transition-all duration-200 ease-in-out ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`absolute h-[2px] w-6 bg-gray-700 transform transition duration-300 ease-in-out ${isOpen ? '-rotate-45' : 'translate-y-2'}`} />
          </button>
        </div>

        <div className={`${isOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1`}>
          <ul className="flex flex-col md:flex-row md:space-x-8 md:mt-0 font-medium">
            {navItems.map((item, index) => {
              const isActive =
                pathname === item.href ||
                (item.href.startsWith('/#') && pathname === '/' && hash === item.href.replace('/', ''))

              return (
                <li key={index}>
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
              )
            })}
          </ul>
        </div>
      </div>
    </nav>
  )
}
