'use client';
import { useEffect, useState } from 'react';

const useFavorite = () => {
   const getFavoriteFromLocalStorage = (): number[] => {
      return JSON.parse(localStorage.getItem('favorite') || '[]');
   };

   const [favorite, setFavorite] = useState<number[]>(getFavoriteFromLocalStorage);

   const addFavorite = (id: number) => {
      if (!favorite.includes(id)) {
         const updatedFavorite = [...favorite, id];
         setFavorite(updatedFavorite);
      }
   };

   const removeFavorite = (id: number) => {
      const updatedFavorite = favorite.filter((itemId: number) => itemId !== id);
      setFavorite(updatedFavorite);
   };

   const handleFavorite = (id: number) => {
      if (favorite.includes(id)) {
         removeFavorite(id);
      } else {
         addFavorite(id);
      }
   };

   useEffect(() => {
      localStorage.setItem('favorite', JSON.stringify(favorite));

      const handleStorageChange = (e: StorageEvent) => {
         if (e.key === 'liked') {
            const newData = JSON.parse(e.newValue || '[]');
            setFavorite(newData);
         }
      };

      const checkLocalStoragePeriodically = setInterval(() => {
         const currentData = getFavoriteFromLocalStorage();
         if (JSON.stringify(currentData) !== JSON.stringify(favorite)) {
            setFavorite(currentData);
         }
      });

      window.addEventListener('storage', handleStorageChange);

      return () => {
         clearInterval(checkLocalStoragePeriodically);
         window.removeEventListener('storage', handleStorageChange);
      };
   }, [favorite]);

   return { favorite, handleFavorite };
};

export default useFavorite;
