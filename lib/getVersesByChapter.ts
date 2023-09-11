import { Verse } from "@/types";

export async function getVersesByChapter(id: string, page: number) {
  const perPage = 10;
  const res = await fetch(
    `https://api.quran.com/api/v4/verses/by_chapter/${id}?language=id&words=true&page=${page}&per_page=${perPage}`
  );
  const data = await res.json();

  return data.verses;
}
