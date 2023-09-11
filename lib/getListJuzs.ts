import { Juzs } from "@/types";

export async function getListJuzs(): Promise<Juzs> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_KEY}/juz`);
  const data = await res.json();
  return data.data as Juzs;
}
