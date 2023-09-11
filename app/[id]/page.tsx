import { fetchVerses } from "@/actions/fetchVerses";
import LoadMore from "@/components/atoms/LoadMore";
import VerseCard from "@/components/molecules/VerseCard";
import { getChapter } from "@/lib/getChapter";
import React from "react";

export default async function Verse({
  params: { id },
}: {
  params: { id: string };
}) {
  const verses = await fetchVerses(id, 1);
  const chapter = await getChapter(id);

  return (
    <div>
      <div className="flex flex-col gap-4">
        {verses && verses.map((item: any) => <VerseCard verses={item} />)}
      </div>
      <LoadMore id={id} lastVerse={verses} verseCount={chapter.verses_count} />
    </div>
  );
}
