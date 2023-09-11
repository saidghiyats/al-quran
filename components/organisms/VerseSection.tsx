import BookmarkProvider from "@/context/BookmarkContext";
import React from "react";
import SurahInfo from "../molecules/SurahInfo";
import VerseCard from "../molecules/VerseCard";

export default function VerseSection({ verses }: any) {
  return (
    <BookmarkProvider>
      <SurahInfo
        transliterationId={verses.name.transliteration.id}
        translationId={verses.name.translation.id}
        revelationId={verses.revelation.id}
        numberOfVerses={verses.numberOfVerses}
        preBismillah={verses.preBismillah}
      />
      <div className="flex flex-col gap-6">
        {verses.verses.map((verse: any) => (
          <VerseCard
            key={verse.number.inSurah}
            id={verse.number.inQuran}
            number={verse.number.inSurah}
            arab={verse.text.arab}
            transliterationId={verse.text.transliteration.id}
            translationId={verse.translation.id}
            nameTransliterationId={verses.name.transliteration.id}
          />
        ))}
      </div>
    </BookmarkProvider>
  );
}
