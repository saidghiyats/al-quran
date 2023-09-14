import { Juz } from "@/types";

export async function getVersesByJuz(juz: string): Promise<Juz> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_KEY}/juz/${juz}`);
  const data = await res.json();

  return data.data as Juz;
}
