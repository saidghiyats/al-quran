'use client';
import { Tabs, Tab } from '@nextui-org/react';
import Surahs from './Surahs';
import Juzs from './Juzs';

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
      </Tabs>
   );
}
