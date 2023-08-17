'use client';
import { Navbar as NextUINavbar, NavbarContent, NavbarBrand, NavbarItem } from '@nextui-org/react';
import { siteConfig } from '@/config/site';
import NextLink from 'next/link';
import clsx from 'clsx';
import { Logo } from '@/components/icons';
import Setting from '../molecules/Setting';
import Search from '../molecules/Search';
import { fontTitle } from '@/config/fonts';
import Theme from '../molecules/Theme';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export const Header = () => {
   const pathname = usePathname();
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
            <NavbarBrand className='gap-3 max-w-fit'>
               <NextLink
                  className='flex justify-start items-center gap-1'
                  href='/'>
                  <Logo />
                  <p className={clsx('font-bold text-inherit', fontTitle.className)}>AL - QURAN</p>
               </NextLink>
            </NavbarBrand>
            <div className='hidden lg:flex gap-4 justify-start ml-2'>
               <div className='inline-flex'>
                  <div className='scrollbar-hide flex h-fit flex-nowrap items-center gap-1 overflow-x-scroll rounded-none bg-transparent p-1 dark:bg-transparent'>
                     {siteConfig.navItems.map(item => {
                        const isActive = pathname === item.href;
                        return (
                           <NextLink
                              key={item.label}
                              href={item.href}
                              className={clsx(
                                 !isActive && 'opacity-disabled',
                                 'tap-highlight-transparent text-small group relative z-0 flex h-8 w-full cursor-pointer items-center justify-center rounded-none px-3 py-1 outline-none transition-opacity'
                              )}>
                              {isActive && (
                                 <span className='bg-foreground absolute bottom-0 z-0 h-[2px] w-[80%] rounded-none shadow-[0_1px_0px_0_rgba(0,0,0,0.05)]'></span>
                              )}
                              <div
                                 className={clsx(
                                    isActive ? 'text-foreground' : 'group-hover:text-default-500',
                                    'text-foreground relative z-10 whitespace-nowrap transition-colors'
                                 )}>
                                 {item.label}
                              </div>
                           </NextLink>
                        );
                     })}
                  </div>
               </div>
            </div>
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
