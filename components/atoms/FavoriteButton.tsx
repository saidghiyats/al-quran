import React from 'react';
import { Button, Tooltip } from '@nextui-org/react';
import { HeartIcon } from '../icons';
import { useCallback, useEffect, useState } from 'react';
import clsx from 'clsx';

interface FavoriteButtonProps {
   id: number;
}

export default function FavoriteButton({ id }: FavoriteButtonProps) {
   const getLikedFromLocalStorage = (): number[] => {
      return JSON.parse(localStorage.getItem('liked') || '[]');
   };

   const [liked, setLiked] = useState<number[]>(getLikedFromLocalStorage);

   const addLike = (id: number) => {
      if (!liked.includes(id)) {
         const updatedLiked = [...liked, id];
         setLiked(updatedLiked);
      }
   };

   const removeLike = (id: number) => {
      const updatedLiked = liked.filter((itemId: number) => itemId !== id);
      setLiked(updatedLiked);
   };

   const handleLikeClick = (id: number) => {
      if (liked.includes(id)) {
         removeLike(id);
      } else {
         addLike(id);
      }
   };

   useEffect(() => {
      localStorage.setItem('liked', JSON.stringify(liked));

      const handleStorageChange = (e: StorageEvent) => {
         if (e.key === 'liked') {
            const newData = JSON.parse(e.newValue || '[]');
            setLiked(newData);
         }
      };

      const checkLocalStoragePeriodically = setInterval(() => {
         const currentData = getLikedFromLocalStorage();
         if (JSON.stringify(currentData) !== JSON.stringify(liked)) {
            setLiked(currentData);
         }
      }, 100);

      window.addEventListener('storage', handleStorageChange);

      return () => {
         clearInterval(checkLocalStoragePeriodically);
         window.removeEventListener('storage', handleStorageChange);
      };
   }, [liked]);

   return (
      <Tooltip
         content={liked.find(x => x === id) ? 'Hapus favorit' : 'Tambah favorit'}
         size='sm'
         delay={0}
         closeDelay={0}
         motionProps={{
            variants: {
               exit: {
                  opacity: 0,
                  transition: {
                     duration: 0.1,
                     ease: 'easeIn',
                  },
               },
               enter: {
                  opacity: 1,
                  transition: {
                     duration: 0.15,
                     ease: 'easeOut',
                  },
               },
            },
         }}>
         <Button
            onPress={() => handleLikeClick(id)}
            className='min-w-unit-7 w-unit-7 h-unit-7'
            isIconOnly
            variant='light'
            size='sm'>
            <HeartIcon
               size={16}
               className={clsx(
                  liked.find(x => x === id) && 'fill-default-500',
                  'stroke-default-500'
               )}
            />
         </Button>
      </Tooltip>
   );
}
