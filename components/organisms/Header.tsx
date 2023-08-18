'use client';
import { Navbar as NextUINavbar, NavbarContent, NavbarBrand, NavbarItem } from '@nextui-org/react';
import NextLink from 'next/link';
import clsx from 'clsx';
import { Logo } from '@/components/icons';
import Setting from '../molecules/Setting';
import Search from '../molecules/Search';
import { fontTitle } from '@/config/fonts';
import Theme from '../molecules/Theme';
import { useState, useEffect } from 'react';
import HeaderNav from '../molecules/HeaderNav';

export const Header = () => {
   const [hasScrolled, setHasScrolled] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         const isScrolled = window.scrollY > 50;
         if (isScrolled !== hasScrolled) {
            setHasScrolled(isScrolled);
         }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, [hasScrolled]);

   return (
      <NextUINavbar
         className={clsx(hasScrolled && '[.dark_&]:border-b [.dark_&]:border-divider', 'shadow-md')}
         maxWidth='xl'
         position='sticky'
         isBlurred={false}>
         <NavbarContent
            className='basis-1/5 sm:basis-full'
            justify='start'>
            <NavbarBrand className='gap-3 max-w-fit hidden sm:block'>
               <NextLink
                  className='flex justify-start items-center gap-1'
                  href='/'>
                  <Logo />
                  <p className={clsx('font-bold text-inherit', fontTitle.className)}>Al-Quran</p>
               </NextLink>
            </NavbarBrand>
            <HeaderNav />
         </NavbarContent>

         <NavbarContent
            className='basis-1/5 sm:basis-full gap-0 md:gap-4'
            justify='end'>
            <NavbarItem>
               <Search />
            </NavbarItem>
            <NavbarItem>
               <Theme />
               <Setting />
            </NavbarItem>
         </NavbarContent>
      </NextUINavbar>
   );
};
