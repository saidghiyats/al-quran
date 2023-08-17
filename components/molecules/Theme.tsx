import * as React from 'react';
import { useTheme } from 'next-themes';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from '@nextui-org/react';
import { MonitorIcon, MoonFilledIcon, SunFilledIcon } from '../icons';

export default function Theme() {
   const { theme, setTheme } = useTheme();
   const themes = [
      {
         name: 'light',
         icon: SunFilledIcon,
         label: 'Light',
      },
      {
         name: 'dark',
         icon: MoonFilledIcon,
         label: 'Dark',
      },
      {
         name: 'system',
         icon: MonitorIcon,
         label: 'System',
      },
   ];
   return (
      <Dropdown
         radius='sm'
         closeOnSelect={false}
         classNames={{
            base: 'p-0 border-small border-divider bg-background min-w-[120px]',
         }}>
         <DropdownTrigger>
            <Button
               variant='light'
               isIconOnly>
               <SunFilledIcon
                  className='dark:hidden'
                  size={20}
               />
               <MoonFilledIcon
                  className='hidden dark:block'
                  size={20}
               />
            </Button>
         </DropdownTrigger>
         <DropdownMenu
            aria-label='Change Theme'
            variant='flat'>
            {themes.map(themeItem => (
               <DropdownItem
                  className='p-0 m-0 hover:bg-transparent'
                  key={themeItem.name}>
                  <Button
                     size='sm'
                     variant='light'
                     className={`${
                        theme === themeItem.name && 'bg-default/40'
                     } w-full justify-start`}
                     onPress={() => setTheme(themeItem.name)}
                     startContent={
                        <themeItem.icon
                           size={16}
                           className='text-xl text-default-500 pointer-events-none flex-shrink-0'
                        />
                     }>
                     {themeItem.label}
                  </Button>
               </DropdownItem>
            ))}
         </DropdownMenu>
      </Dropdown>
   );
}
