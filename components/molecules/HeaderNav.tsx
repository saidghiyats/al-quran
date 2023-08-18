'use client';
import { siteConfig } from '@/config/site';
import clsx from 'clsx';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';

export default function HeaderNav() {
   const pathname = usePathname();

   return (
      <div className='hidden lg:flex gap-4 justify-start ml-2'>
         <div className='inline-flex'>
            <div className='scrollbar-hide flex h-fit flex-nowrap items-center gap-1 overflow-x-scroll rounded-none bg-transparent p-1 dark:bg-transparent'>
               {siteConfig.navItems.map((item, index) => {
                  const isActive = pathname === item.href;
                  return (
                     <NextLink
                        id='navlink'
                        key={index}
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
   );
}
