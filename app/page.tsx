import { getListChapters } from '@/lib/getListChapters';
import { getAllJuzs } from '@/lib/getAllJuzs';
// import dynamic from 'next/dynamic';
import SectionTitle from '@/components/molecules/SectionTitle';
import SurahSection from '@/components/organisms/SurahSection';

// const SectionTitle = dynamic(() => import('../components/molecules/SectionTitle'), {
//    loading: () => <p>Loading...</p>,
// });
// const SurahSection = dynamic(() => import('../components/organisms/SurahSection'), {
//    loading: () => <p>Loading...</p>,
// });

export default async function Home() {
   const chapters = await getListChapters();
   const juzs = await getAllJuzs();

   return (
      <>
         <SectionTitle title='Baca Al-Quran' />
         <SurahSection
            chapters={chapters}
            juzs={juzs}
         />
      </>
   );
}
