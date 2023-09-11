"use client";

import { stringify } from "querystring";
import * as React from "react";
import InfiniteScroll from "react-infinite-scroller";

type ItemsProps = {
  initialItems: any;
  id: any;
};

export default function Verse({ initialItems, id }: ItemsProps) {
  const fetching = React.useRef(false);
  const [pages, setPages] = React.useState([initialItems]);
  const items = pages.flatMap((page) => page);

  const loadMore = async (page: number) => {
    if (!fetching.current) {
      try {
        fetching.current = true;

        const response = await fetch(
          `https://api.quran.com/api/v4/verses/by_chapter/${id}?language=id&words=true&page=${page}&per_page=10`
        );
        const data = await response.json();

        setPages((prev) => [...prev, data.items]);
      } finally {
        fetching.current = false;
      }
    }
  };

  return (
    <InfiniteScroll
      hasMore
      pageStart={0}
      loadMore={loadMore}
      loader={
        <span key={0} className="loader">
          Loading ...
        </span>
      }
      element="main"
    >
      {items}
    </InfiniteScroll>
  );
}
