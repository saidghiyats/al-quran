import { Chapter } from "@/types";
import SurahCard from "../molecules/SurahCard";

interface SurahsProps {
  chapters: Chapter[];
}
export default function Surahs({ chapters }: SurahsProps) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {chapters &&
        chapters.map((chapter) => (
          <SurahCard
            key={chapter.number}
            number={chapter.number}
            transliterationId={chapter.name.transliteration.id}
            numberOfVerses={chapter.numberOfVerses}
            translationId={chapter.name.translation.id}
            href={`/${chapter.number}`}
          />
        ))}
    </section>
  );
}
