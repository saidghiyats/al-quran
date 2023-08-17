import { getListChapters } from '@/lib/getListChapters';
import { getAllJuzs } from '@/lib/getAllJuzs';
import SurahSection from '@/components/organisms/SurahSection';

export default async function Home() {
   const chapters = await getListChapters();
   const juzs = await getAllJuzs();

   return (
      <>
         <SurahSection
            chapters={chapters}
            juzs={juzs}
         />
      </>
   );
}
