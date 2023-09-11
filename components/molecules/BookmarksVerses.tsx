"use client";
import { Tabs, Tab } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
import EditBookmarkName from "../atoms/EditBookmarkName";

export default function BookmarksVerses() {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    const handleLocalStorageChange = (e: StorageEvent) => {
      if (e.key === "bookmarks") {
        setBookmarks(JSON.parse(e.newValue || "[]"));
      }
    };

    window.addEventListener("storage", handleLocalStorageChange);

    const storedData = localStorage.getItem("bookmarks");

    if (storedData) {
      setBookmarks(JSON.parse(storedData));
    }

    return () => {
      window.removeEventListener("storage", handleLocalStorageChange);
    };
  }, []);
  return (
    <div className="grid grid-cols-2 gap-6">
      <div>
        <SectionTitle title="Single" />
        <div className="flex flex-col gap-2">
          {bookmarks.length > 0 ? (
            bookmarks
              ?.filter((v: any) => v.type === "single")
              .map((bookmarkGroup: any) =>
                bookmarkGroup.data.map((bookmark: any, j: number) => (
                  <div key={j} className="border border-divider p-2 rounded-md">
                    <EditBookmarkName type="single" name={bookmark.name} />
                    <p className="text-sm font-light mt-2 ml-2">
                      Surah {bookmark.surah} ayat {bookmark.ayah}
                    </p>
                  </div>
                ))
              )
          ) : (
            <p className="text-sm font-light">Tidak ada bookmarks</p>
          )}
        </div>
      </div>
      <div>
        <SectionTitle title="Multiple" />
        <div className="flex flex-col gap-2 ">
          {bookmarks.length > 0 ? (
            bookmarks
              ?.filter((v: any) => v.type === "multiple")
              .map((bookmarkGroup: any) =>
                bookmarkGroup.data.map((bookmark: any, j: number) => (
                  <div key={j} className="border border-divider p-2 rounded-md">
                    <EditBookmarkName type="multiple" name={bookmark.name} />
                    <div className="space-y-2 mt-2 ml-2">
                      {bookmark.ids.map((item: any, i: number) => (
                        <p key={i} className="text-sm font-light">
                          Surah {item.surah} ayat {item.ayah}
                        </p>
                      ))}
                    </div>
                  </div>
                ))
              )
          ) : (
            <p className="text-sm font-light">Tidak ada bookmarks</p>
          )}
        </div>
      </div>
    </div>
  );
}
