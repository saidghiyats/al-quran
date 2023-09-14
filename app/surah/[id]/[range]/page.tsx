import VerseSection from "@/components/organisms/VerseSection";
import { getRangeVerses } from "@/lib/getRangeVerses";
import React from "react";

export default async function RangeAyah({
  params: { range, id },
}: {
  params: { range: string; id: string };
}) {
  const verses = await getRangeVerses(id, range);
  console.log(verses);
  return <VerseSection verses={verses} />;
}
