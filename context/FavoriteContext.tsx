'use client';

import { ReactNode, createContext, useEffect, useState, useCallback } from 'react';

export const FavoriteContext = createContext<any>({});

interface FavoriteProviderProps {
   children: ReactNode;
}

export default function FavoriteProvider({ children }: FavoriteProviderProps) {
   const getFavoriteFromLocalStorage = (): number[] => {
      if (typeof window === 'undefined') {
         return [];
      }
      return JSON.parse(localStorage.getItem('favorite') || '[]');
   };

   const [favorite, setFavorite] = useState<number[]>(getFavoriteFromLocalStorage);

   const addFavorite = useCallback(
      (id: number) => {
         if (!favorite.includes(id)) {
            const updatedFavorite = [...favorite, id];
            setFavorite(updatedFavorite);
         }
      },
      [favorite]
   );

   const removeFavorite = useCallback(
      (id: number) => {
         const updatedFavorite = favorite.filter((itemId: number) => itemId !== id);
         setFavorite(updatedFavorite);
      },
      [favorite]
   );

   const handleFavorite = useCallback(
      (id: number) => {
         if (favorite.includes(id)) {
            removeFavorite(id);
         } else {
            addFavorite(id);
         }
      },
      [favorite, removeFavorite, addFavorite]
   );

   useEffect(() => {
      localStorage.setItem('favorite', JSON.stringify(favorite));

      const handleStorageChange = (e: StorageEvent) => {
         if (e.key === 'liked') {
            const newData = JSON.parse(e.newValue || '[]');
            setFavorite(newData);
         }
      };

      window.addEventListener('storage', handleStorageChange);

      return () => {
         window.removeEventListener('storage', handleStorageChange);
      };
   }, [favorite]);

   return (
      <FavoriteContext.Provider value={{ favorite, handleFavorite }}>
         {children}
      </FavoriteContext.Provider>
   );
}
