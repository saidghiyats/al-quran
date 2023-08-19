export async function getListChapters() {
   const res = await fetch('https://api.quran.com/api/v4/chapters?language=id', {
      cache: 'no-store',
   });
   const data = await res.json();

   return data.chapters;
}
