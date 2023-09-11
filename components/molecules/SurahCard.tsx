"use client";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Tooltip,
  User,
} from "@nextui-org/react";
import { CopyIcon } from "../icons";
import { surahName } from "@/config/fonts";
import clsx from "clsx";
import Link from "next/link";
import FavoriteButton from "../atoms/FavoriteButton";

interface SurahCardProps {
  number: number;
  transliterationId: string;
  numberOfVerses: number;
  translationId: string;
  href: string;
  classNames?: any;
}

export default function SurahCard({
  number,
  transliterationId,
  numberOfVerses,
  translationId,
  href,
  classNames,
}: SurahCardProps) {
  return (
    <Card as={"div"} radius="sm" isPressable classNames={classNames}>
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
        <FavoriteButton id={number} />
      </CardHeader>
      <Link href={href}>
        <CardBody className="flex justify-between flex-row items-center overflow-hidden">
          <User
            classNames={{
              base: "justify-start",
              name: "text-sm pb-1 truncate",
              description: "capitalize truncate",
            }}
            name={`${transliterationId}`}
            description={`${translationId}`}
            avatarProps={{ radius: "sm", name: `${number}` }}
          />

          <div className="flex flex-col items-center ml-2">
            <span className={clsx(surahName.className, "text-xl")}>
              {(number < 10 && `00${number}`) ||
                (number < 100 && `0${number}`) ||
                number}
            </span>
            <span className="text-foreground-400 truncate text-tiny">
              {numberOfVerses} Ayat
            </span>
          </div>
        </CardBody>
      </Link>
    </Card>
  );
}
