import SurahInfo from "@/components/molecules/SurahInfo";
import VerseCard from "@/components/molecules/VerseCard";
import VerseSection from "@/components/organisms/VerseSection";
import { surahName, uthmaniHafs } from "@/config/fonts";
import { getVersesByChapter } from "@/lib/getVersesByChapter";
import clsx from "clsx";
import React from "react";

export default async function Chapter({
  params: { id },
}: {
  params: { id: string };
}) {
  const verses = await getVersesByChapter(id);
  return (
    <>
      <VerseSection verses={verses} />
    </>
  );
}
