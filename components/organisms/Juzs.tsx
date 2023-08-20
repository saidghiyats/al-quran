import { Card, CardBody, CardHeader, Link, Divider } from '@nextui-org/react';
import SurahCard from '../molecules/SurahCard';

export default function Juzs({ juzs, chapters }: any) {
   return (
      <section className='columns-1 md:columns-2 lg:columns-3 overflow-hidden'>
         {juzs.map((juz: any) => (
            <>
               <Card
                  radius='sm'
                  className='bg-default-50 shadow-none mb-4'
                  key={juz.id}>
                  <CardHeader className='px-4 flex justify-between text-sm'>
                     <span>{juz.juz_number}</span>
                     <Link
                        color='foreground'
                        underline='hover'
                        href={`/juz/${juz.juz_number}`}>
                        Baca
                     </Link>
                  </CardHeader>
                  <Divider />
                  <CardBody className='flex flex-col gap-4 p-4'>
                     {Object.entries(juz.verse_mapping).map(([chapter, verses]: any) => {
                        const matchingChapter = chapters.find((x: any) => x.id == chapter);
                        return (
                           <SurahCard
                              key={chapter}
                              id={matchingChapter?.id}
                              name_simple={matchingChapter?.name_simple}
                              verses_count={matchingChapter?.verses_count}
                              translated_name={matchingChapter?.translated_name.name}
                              href={`/${chapter}/${verses}`}
                              classNames={{ base: 'bg-background' }}
                           />
                        );
                     })}
                  </CardBody>
               </Card>
            </>
         ))}
      </section>
   );
}
