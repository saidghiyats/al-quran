'use client';
import { Tabs, Tab, Card } from '@nextui-org/react';
import Juzs from './Juzs';
import dynamic from 'next/dynamic';
import SurahsSkeleton from '../skeleton/Surahs';

const Surahs = dynamic(() => import('../organisms/Surahs'), {
   loading: () => <SurahsSkeleton />,
});

export default function SurahSection({ chapters, juzs }: any) {
   return (
      <Tabs
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
   );
}
