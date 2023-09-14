import { Card, CardBody, CardHeader, Link, Divider } from "@nextui-org/react";
import SurahCard from "../molecules/SurahCard";
import { Chapter, Juzs } from "@/types";

interface JuzsProps {
  juzs: Juzs[];
}

export default function Juzs({ juzs }: JuzsProps) {
  return (
    <section className="columns-1 md:columns-2 lg:columns-3 overflow-hidden">
      {juzs &&
        juzs.map((juz) => (
          <>
            <Card
              radius="sm"
              className="bg-default-100 mb-4 border-none shadow-none"
              key={juz.number}
            >
              <CardHeader className="px-4 pb-0 flex justify-between [&>*]:text-sm">
                <span>Juz {juz.number}</span>
                <Link
                  color="foreground"
                  underline="hover"
                  href={`/juz/${juz.number}`}
                >
                  Baca
                </Link>
              </CardHeader>
              <CardBody className="flex flex-col gap-4 p-4">
                {juz.chapters?.map((chapter: Chapter) => {
                  return (
                    <SurahCard
                      key={chapter.number}
                      number={chapter.number}
                      transliterationId={chapter.name.transliteration.id}
                      numberOfVerses={chapter.numberOfVerses}
                      translationId={chapter.name.translation.id}
                      href={`/surah/${chapter.number}/${chapter.key}`}
                      classNames={{ base: "shadow-none" }}
                    />
                  );
                })}
              </CardBody>
            </Card>
          </>
        ))}
    </section>
  );
}
