"use client";

import { fetchVerses } from "@/actions/fetchVerses";
import { Verse } from "@/types";
import { Spinner } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import VerseCard from "../molecules/VerseCard";

export default function LoadMore({ id, lastVerse, verseCount }: any) {
  const [verses, setVerses] = useState<Verse[]>([]);

  const [pageLoaded, setPageLoaded] = useState(1);

  const { ref, inView } = useInView();

  const loadMoreVerses = async () => {
    const nextPage = pageLoaded + 1;
    const nextVerse: any = (await fetchVerses(id, nextPage)) ?? [];
    setVerses((prev: any) => [...prev, ...nextVerse]);

    setPageLoaded(nextPage);
  };

  useEffect(() => {
    if (inView) {
      console.log("Scrolled to the end");
      loadMoreVerses();
    }
  }, [inView]);

  return (
    <>
      <div className="flex flex-col gap-4">
        {verses && verses.map((item: any) => <VerseCard verses={item} />)}
      </div>

      {lastVerse.map((x: any) => x.verse_number).includes(verseCount) ? null : (
        <div className="mt-6" ref={ref}>
          Loading...
        </div>
      )}
    </>
  );
}
