import { fontTitle, uthmaniHafs } from "@/config/fonts";
import { PreBismillah } from "@/types";
import clsx from "clsx";

interface SurahInfoProps {
  transliterationId: string;
  translationId: string;
  revelationId: string;
  numberOfVerses: number;
  preBismillah?: PreBismillah | null;
}

export default function SurahInfo({
  transliterationId,
  translationId,
  revelationId,
  numberOfVerses,
  preBismillah,
}: SurahInfoProps) {
  return (
    <div className="w-full text-center mb-10">
      <h1
        className={clsx(
          fontTitle.className,
          "text-2xl font-semibold uppercase tracking-[3px]"
        )}
      >
        {transliterationId} ( {translationId} )
      </h1>
      <h3 className="font-medium font-mono">
        {revelationId} - {numberOfVerses} Ayat
      </h3>
      <h2 className={clsx(uthmaniHafs.className, "text-4xl mt-6")}>
        {preBismillah?.text.arab}
      </h2>
    </div>
  );
}
