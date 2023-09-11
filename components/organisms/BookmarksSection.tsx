import React from "react";
import BookmarksVerses from "../molecules/BookmarksVerses";
import { Chapter } from "@/types";

export default function BookmarksSection({
  chapters,
}: {
  chapters: Chapter[];
}) {
  return <BookmarksVerses />;
}
