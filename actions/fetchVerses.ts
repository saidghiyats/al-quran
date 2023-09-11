"use server";

import { Verse } from "@/types";

export async function fetchVerses(id: string, page: number) {
  const apiUrl = `https://api.quran.com/api/v4/verses/by_chapter/${id}?language=id&words=true&page=${page}&per_page=10`;

  try {
    const res = await fetch(apiUrl);
    const data = await res.json();

    return data.verses as any;
  } catch (error) {
    console.log("Error fetching data:", error);

    return null;
  }
}
