"use client";

import React, { useState, useRef } from "react";

export default function EditBookmarkName({
  type,
  name,
}: {
  type: string;
  name: string;
}) {
  const [value, setValue] = useState(name);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleDivClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleInputBlur = () => {
    const storedData = JSON.parse(localStorage.getItem("bookmarks") || "[]");

    const newData = storedData.map((bookmarkGroup: any) => {
      if (bookmarkGroup.type === type) {
        const updatedData = bookmarkGroup.data.map((bookmark: any) => {
          if (bookmark.name === name) {
            return { ...bookmark, name: value };
          }
          return bookmark;
        });

        return { ...bookmarkGroup, data: updatedData };
      }
      return bookmarkGroup;
    });
    localStorage.setItem("bookmarks", JSON.stringify(newData));
  };

  return (
    <div className="min-w-0">
      <div className="max-w-[500px] overflow-hidden relative">
        <input
          className="focus:border focus:border-divider h-[30px] p-[4px_10px] bg-transparent left-0 m-0 outline-none absolute text-ellipsis top-0 w-full text-success font-medium"
          value={value}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          ref={inputRef}
        />
        <div
          onClick={handleDivClick}
          className="h-[30px] p-[4px_10px] opacity-0 text-success relative text-ellipsis top-0 w-full left-0 m-0 outline-none bg-transparent font-medium"
        >
          {value}
        </div>
      </div>
    </div>
  );
}
