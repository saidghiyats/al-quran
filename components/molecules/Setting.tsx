import React from 'react';
import { SettingIcon } from '../icons';
import { Button } from '@nextui-org/react';

export default function Setting() {
   return (
      <Button
         variant='light'
         isIconOnly>
         <SettingIcon className='stroke-default-500' />
      </Button>
   );
}
