import { SearchIcon } from '../icons';
import { Kbd, Button } from '@nextui-org/react';

export default function Search() {
   return (
      <Button
         aria-label='Search'
         className='bg-default-100 text-default-500'
         endContent={<Kbd keys={['ctrl']}>K</Kbd>}
         startContent={
            <SearchIcon
               size={18}
               className='text-base text-default-300 pointer-events-none flex-shrink-0'
            />
         }>
         Quick Search...
      </Button>
   );
}
