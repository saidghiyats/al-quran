import { getListChapters } from '@/lib/getListChapters';
import { getAllJuzs } from '@/lib/getAllJuzs';
import SurahSection from '@/components/organisms/SurahSection';
import SectionTitle from '@/components/molecules/SectionTitle';

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
