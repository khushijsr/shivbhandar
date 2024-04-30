import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import { items } from "../consts/items";
import { montserrat } from "../fonts";
import cn from "classnames";
import Item from "./Item";
import useVoiceToText from "../hooks/useVoiceToText";

export default function Items({
  setShowContacts,
}: {
  setShowContacts: Dispatch<SetStateAction<boolean>>;
}) {
  const { startListening, transcript } = useVoiceToText({
    continuous: false,
  });

  const [searchText, setSearchText] = useState("");
  const filteredItems = searchText.length
    ? items.filter((item) =>
        item.name.toLowerCase().includes(searchText.toLowerCase())
      )
    : items;

  const onStartListening = useCallback(() => {
    startListening();
  }, []);

  useEffect(() => {
    setSearchText(transcript);
  }, [transcript]);

  return (
    <>
      <div className="sticky top-0 bg-slate-100">
        <header
          className={cn(
            montserrat.className,
            "px-4 py-3 flex justify-between items-center text-xl text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
          )}
        >
          <span className="material-symbols-outlined text-white focus:text-slate-500">
            shopping_cart
          </span>
          <div>Shiv Bhandar</div>
          <button
            onClick={() => setShowContacts(true)}
            className="w-6 h-6 flex items-center justify-center"
          >
            <span className="material-symbols-outlined text-white focus:text-slate-500">
              call
            </span>
          </button>
        </header>
        <div className="p-2 r flex">
          <div className="bg-white gap-x-2 flex items-center border border-gray-300 p-2 w-full rounded-md focus-within:outline-none focus-within:ring-2 focus-within:ring-violet-700 focus-within:border-transparent">
            <span className="material-symbols-outlined text-slate-400">
              search
            </span>
            <input
              value={searchText}
              placeholder="Search items"
              className="border-none focus:outline-none w-full text-md text-slate-500 placeholder-slate-300"
              onChange={(e) => setSearchText(e.currentTarget.value)}
            />
            {searchText.length ? (
              <button
                onClick={() => setSearchText("")}
                className="w-6 h-6 flex items-center justify-center"
              >
                <span className="material-symbols-outlined text-slate-400 focus:text-slate-500">
                  close
                </span>
              </button>
            ) : null}
            <button
              onClick={() => onStartListening()}
              className="w-6 h-6 flex items-center justify-center"
            >
              <span className="material-symbols-outlined text-slate-400">
                mic
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="px-2 space-y-2">
        {filteredItems.map((item, i) => (
          <Item item={item} key={`${item.id}-${i}`} />
        ))}
      </div>
    </>
  );
}
