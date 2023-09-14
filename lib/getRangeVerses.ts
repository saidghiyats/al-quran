import { Verses } from "@/types";

export async function getRangeVerses(
  id: string,
  range: string
): Promise<Verses> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_KEY}/surah/${id}/${range}`
  );
  const data = await res.json();

  return data.data as Verses;
}
