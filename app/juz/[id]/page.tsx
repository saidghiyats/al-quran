import { getVersesByJuz } from "@/lib/getVersesByJuz";
import React from "react";

export default async function JuzPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const data = await getVersesByJuz(id);
  console.log(data);
  return (
    <>
      <div>{id}</div>
      <div>{data.totalAyah}</div>
    </>
  );
}
