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
}

export interface Juzs {
  number: number;
  juzs: Chapter[];
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
