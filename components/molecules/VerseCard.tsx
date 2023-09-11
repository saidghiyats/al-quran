"use client";
import { surahName, uthmaniHafs } from "@/config/fonts";
import { Button, Card, CardBody, CardHeader, Tooltip } from "@nextui-org/react";
import clsx from "clsx";
import FavoriteButton from "../atoms/FavoriteButton";
import { BookmarkIcon, CopyIcon } from "../icons";
import BookmarkButton from "../atoms/BookmarkButton";

export interface VerseCardProps {
  id: number;
  number: number;
  arab: string;
  transliterationId: string;
  translationId: string;
  nameTransliterationId: string;
}

function toArabicNumeral(id: string) {
  return ("" + id).replace(/[0-9]/g, function (t) {
    return "٠١٢٣٤٥٦٧٨٩".slice(+t, +t + 1);
  });
}

export default function VerseCard({
  id,
  number,
  arab,
  transliterationId,
  translationId,
  nameTransliterationId,
}: VerseCardProps) {
  return (
    <>
      <Card as={"div"} radius="sm">
        <CardHeader className="justify-between items-center pb-0">
          <Tooltip
            content="Salin info surah"
            size="sm"
            delay={0}
            closeDelay={0}
            motionProps={{
              variants: {
                exit: {
                  opacity: 0,
                  transition: {
                    duration: 0.1,
                    ease: "easeIn",
                  },
                },
                enter: {
                  opacity: 1,
                  transition: {
                    duration: 0.15,
                    ease: "easeOut",
                  },
                },
              },
            }}
          >
            <Button
              className="min-w-unit-7 w-unit-7 h-unit-7"
              isIconOnly
              variant="light"
              size="sm"
            >
              <CopyIcon size={16} className="stroke-default-500" />
            </Button>
          </Tooltip>
          <BookmarkButton
            id={id}
            nameTransliterationId={nameTransliterationId}
            number={number}
          />
        </CardHeader>
        <CardBody className="flex flex-col overflow-hidden relative space-y-2">
          <p
            dir="rtl"
            className={clsx(
              uthmaniHafs.className,
              "text-right text-3xl mb-2 leading-[50px]"
            )}
          >
            {arab} {toArabicNumeral(String(number))}
          </p>
          <p className="font-light font-mono">{transliterationId}</p>
          <p className="text-sm font-medium">{translationId}</p>
        </CardBody>
      </Card>
    </>
  );
}
