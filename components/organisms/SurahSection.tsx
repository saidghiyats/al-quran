'use client';
import { Tabs, Tab } from '@nextui-org/react';
// import Surahs from './Surahs';
// import Juzs from './Juzs';
import dynamic from 'next/dynamic';
import SurahSkeleton from '../skeleton/SurahSkeleton';
import JuzSkeleton from '../skeleton/JuzSkeleton';
import FavoriteProvider from '@/context/FavoriteContext';

const Surahs = dynamic(() => import('../organisms/Surahs'), {
   loading: () => <SurahSkeleton />,
});
const Juzs = dynamic(() => import('../organisms/Juzs'), {
   loading: () => <JuzSkeleton />,
});

export default function SurahSection({ chapters, juzs }: any) {
   return (
      <FavoriteProvider>
         <Tabs
            radius='sm'
            aria-label='Options'
            classNames={{ panel: 'mt-2' }}>
            <Tab
               key='surahs'
               title='Surah'>
               <Surahs chapters={chapters} />
            </Tab>
            <Tab
               key='juzs'
               title='Juz'>
               <Juzs
                  juzs={juzs}
                  chapters={chapters}
               />
            </Tab>
            <Tab
               key='revelation'
               title='Revelation'>
               <h3>Comming soon.</h3>
            </Tab>
         </Tabs>
      </FavoriteProvider>
   );
}
