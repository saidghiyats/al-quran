import {
  Fira_Code as FontMono,
  Inter as FontSans,
  Quicksand as FontTitle,
} from "next/font/google";
import localFont from "next/font/local";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});
export const fontTitle = FontTitle({
  subsets: ["latin"],
  variable: "--font-title",
});

export const surahName = localFont({
  src: "../public/surah_name.woff2",
});

export const uthmaniHafs = localFont({
  src: "../public/UthmanicHafs1Ver18.woff2",
});
