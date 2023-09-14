import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface Chapter {
  number: number;
  numberOfVerses: number;
  revelation: { id: string };
  name: {
    long: string;
    transliteration: { id: string };
    translation: { id: string };
  };
  preBismillah?: null | PreBismillah;
  rangeOfVerses?: string;
  key?: string;
}

export interface Juzs {
  number: number;
  chapters: Chapter[];
}

export interface Juz {
  number: number;
  totalAyah: number;
  chapters: Verse[];
}

export interface PreBismillah {
  text: {
    arab: string;
    transliteration: { id: string };
    translation: { id: string };
  };
}

export interface Verse {
  number: {
    inQuran: number;
    inSurah: number;
  };
  text: {
    arab: string;
    transliteration: { id: string };
  };
  translation: { id: string };
}

export interface Verses extends Chapter {
  verses: Verse[];
}

export interface Bookmarks {
  type: string;
  data: {
    id: number;
    ids?: { id: number }[];
    name: string;
    number: number;
    surah: string;
    time: string;
  }[];
}
