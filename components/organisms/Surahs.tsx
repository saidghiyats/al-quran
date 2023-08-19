import SurahCard from '../molecules/SurahCard';

export default function Surahs({ chapters }: any) {
   return (
      <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
         {chapters ? (
            chapters.map((chapter: any) => (
               <SurahCard
                  key={chapter.id}
                  id={chapter.id}
                  name_simple={chapter.name_simple}
                  verses_count={chapter.verses_count}
                  translated_name={chapter.translated_name.name}
                  href={`/${chapter.id}`}
               />
            ))
         ) : (
            <h3>Loading...</h3>
         )}
      </section>
   );
}
