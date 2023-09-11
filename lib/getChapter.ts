export async function getChapter(id: string) {
  const res = await fetch(
    `https://api.quran.com/api/v4/chapters/${id}?language=id`
  );
  const data = await res.json();

  return data.chapter;
}
