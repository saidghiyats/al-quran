import { Chapter } from "@/types";

export async function getListChapters(): Promise<Chapter> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_KEY}/surah/`);
  const data = await res.json();
  return data.data as Chapter;
}
