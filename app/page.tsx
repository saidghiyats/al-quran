import { getListChapters } from "@/lib/getListChapters";
import { getListJuzs } from "@/lib/getListJuzs";
import SectionTitle from "@/components/molecules/SectionTitle";
import SurahSection from "@/components/organisms/SurahSection";

export default async function Home() {
  const chapters = await getListChapters();
  const juzs = await getListJuzs();

  return (
    <>
      <SectionTitle title="Baca Al-Quran" />
      <SurahSection chapters={chapters} juzs={juzs} />
    </>
  );
}
