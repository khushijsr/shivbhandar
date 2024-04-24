"use client";

import { useState } from "react";
import { items } from "./consts/items";
import { montserrat } from "./fonts";
import cn from "classnames";
import Item from "./components/Item";

export default function Home() {
  const [searchText, setSearchText] = useState("");

  const filteredItems = searchText.length
    ? items.filter((item) =>
        item.name.toLowerCase().includes(searchText.toLowerCase())
      )
    : items;

  return (
    <main className="flex min-h-screen flex-col">
      <div className="sticky top-0 bg-white">
        <header
          className={cn(
            montserrat.className,
            "px-2 py-3 flex justify-center text-xl text-violet-700	border-b"
          )}
        >
          Shiv Bhandar
        </header>
        <div className="p-2 r">
          <input
            value={searchText}
            className="border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-violet-700 focus:border-transparent"
            onChange={(e) => setSearchText(e.currentTarget.value)}
          />
        </div>
      </div>
      <div className="px-2 space-y-2">
        {filteredItems.map((item, i) => (
          <Item item={item} key={`${item.id}-${i}`} />
        ))}
      </div>
    </main>
  );
}
