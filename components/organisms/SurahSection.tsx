"use client";
import { Tabs, Tab } from "@nextui-org/react";
import dynamic from "next/dynamic";
import SurahSkeleton from "../skeleton/SurahSkeleton";
import JuzSkeleton from "../skeleton/JuzSkeleton";
import FavoriteProvider from "@/context/FavoriteContext";

const Surahs = dynamic(() => import("../organisms/Surahs"), {
  loading: () => <SurahSkeleton length={12} />,
});
const DynamicJuzs = dynamic(() => import("../organisms/Juzs"), {
  loading: () => <JuzSkeleton />,
});

export default function SurahSection({ chapters, juzs }: any) {
  return (
    <FavoriteProvider>
      <Tabs radius="sm" aria-label="Options" classNames={{ panel: "mt-2" }}>
        <Tab key="surahs" title="Surah">
          <Surahs chapters={chapters} />
        </Tab>
        <Tab key="juzs" title="Juz">
          <DynamicJuzs juzs={juzs} />
        </Tab>
        <Tab key="revelation" title="Revelation">
          <h3>Coming soon.</h3>
        </Tab>
      </Tabs>
    </FavoriteProvider>
  );
}
