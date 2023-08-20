import SurahCardSkeleton from './SurahCardSkeleton';

export default function SurahSkeleton() {
   return (
      <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
         {Array.from({ length: 12 }, (_, index) => (
            <SurahCardSkeleton key={index} />
         ))}
      </section>
   );
}
