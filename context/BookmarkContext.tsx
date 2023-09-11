"use client";

import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from "react";

export const BookmarkContext = createContext<any>({});

interface BookmarkProviderProps {
  children: ReactNode;
}

export default function BookmarkProvider({ children }: BookmarkProviderProps) {
  const getFavoriteFromLocalStorage = () => {
    if (typeof window === "undefined") {
      return [];
    }
    return JSON.parse(localStorage.getItem("bookmarks") || "[]");
  };
  const [bookmark, setBookmark] = useState(getFavoriteFromLocalStorage);

  useEffect(() => {
    if (!localStorage.getItem("bookmarks")) {
      localStorage.setItem("bookmarks", JSON.stringify([]));
    }
  }, []);

  const addToBookmark = useCallback(
    (
      value: string,
      selected: string,
      id: number,
      surah: string,
      ayah: number
    ) => {
      const existingData = JSON.parse(
        localStorage.getItem("bookmarks") || "[]"
      );

      const currentDate = new Date(); // Mengambil tanggal dan waktu saat ini
      const formattedDate = currentDate.toLocaleDateString("en-GB", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });

      const index = existingData.findIndex(
        (item: any) =>
          item.type === selected &&
          item.data.some((entry: any) => entry.name === value)
      );

      if (index !== -1) {
        if (selected === "single") {
          const existingEntry = existingData[index];
          existingEntry.data[0].id = id;
          existingEntry.data[0].surah = surah;
          existingEntry.data[0].ayah = ayah;
          existingEntry.data[0].time = formattedDate;
        } else if (selected === "multiple") {
          const existingEntry = existingData[index];
          const existingIdEntry = existingEntry.data[0].ids.find(
            (entry: any) => entry.id === id
          );
          if (existingIdEntry) {
            existingIdEntry.surah = surah;
            existingIdEntry.ayah = ayah;
            existingIdEntry.time = formattedDate;
          } else {
            const newIdEntry = {
              id,
              surah: surah,
              ayah: ayah,
              time: formattedDate,
            };
            existingEntry.data[0].ids.push(newIdEntry);
          }
        }
      } else {
        const newDataEntry: any = {
          type: selected,
          data: [
            { name: value, id, surah: surah, ayah: ayah, time: formattedDate },
          ],
        };
        if (selected === "multiple") {
          newDataEntry.data = [
            {
              name: value,
              ids: [{ id, surah: surah, ayah: ayah, time: formattedDate }],
            },
          ];
        }
        existingData.push(newDataEntry);
      }

      const mergedData = existingData.reduce((acc: any[], entry: any) => {
        if (entry.type === "single") {
          const existingSingleEntry = acc.find(
            (item: any) => item.type === "single"
          );
          if (existingSingleEntry) {
            existingSingleEntry.data.push(...entry.data);
          } else {
            acc.push(entry);
          }
        } else if (entry.type === "multiple") {
          const existingMultipleEntry = acc.find(
            (item: any) => item.type === "multiple"
          );
          if (existingMultipleEntry) {
            existingMultipleEntry.data.push(...entry.data);
          } else {
            acc.push(entry);
          }
        } else {
          acc.push(entry);
        }
        return acc;
      }, []);

      localStorage.setItem("bookmarks", JSON.stringify(mergedData));
      setBookmark(mergedData);
    },
    []
  );

  return (
    <BookmarkContext.Provider
      value={{
        addToBookmark,
        bookmark,
      }}
    >
      {children}
    </BookmarkContext.Provider>
  );
}
