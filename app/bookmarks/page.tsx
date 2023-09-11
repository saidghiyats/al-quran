import BookmarksSection from "@/components/organisms/BookmarksSection";
import { getListChapters } from "@/lib/getListChapters";
import { Chapter } from "@/types";

export default async function BookmarksPage() {
  const chapters: Chapter[] | any = await getListChapters();
  return <BookmarksSection chapters={chapters} />;
}
