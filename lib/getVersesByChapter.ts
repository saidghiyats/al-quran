import { Verses } from "@/types";

export async function getVersesByChapter(chapter: string): Promise<Verses> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_KEY}/surah/${chapter}`
  );
  const data = await res.json();

  return data.data as Verses;
}
