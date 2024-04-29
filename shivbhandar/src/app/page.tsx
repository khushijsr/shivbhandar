"use client";

import { useState } from "react";
import { items } from "./consts/items";
import { contacts } from "./consts/contacts";
import { montserrat } from "./fonts";
import cn from "classnames";
import Item from "./components/Item";
import Contact from "./components/Contact";

export default function Home() {
  const [searchText, setSearchText] = useState("");
  const [contactSearchText, setContactsSearchText] = useState("");
  const [showContacts, setShowContacts] = useState(false);

  const filteredItems = searchText.length
    ? items.filter((item) =>
        item.name.toLowerCase().includes(searchText.toLowerCase())
      )
    : items;

  const filteredContacts = contactSearchText.length
    ? contacts.filter((item) => {
        if (
          item.company.toLowerCase().includes(contactSearchText.toLowerCase())
        ) {
          return true;
        }

        return false;
      })
    : contacts;

  return (
    <main className="flex min-h-screen flex-col">
      <div className="sticky top-0 bg-white">
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
          <div className="gap-x-2 flex items-center border border-gray-300 p-2 w-full rounded-md focus-within:outline-none focus-within:ring-2 focus-within:ring-violet-700 focus-within:border-transparent">
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
          </div>
        </div>
      </div>
      <div className="px-2 space-y-2">
        {filteredItems.map((item, i) => (
          <Item item={item} key={`${item.id}-${i}`} />
        ))}
      </div>
      <div
        className={cn(
          "fixed w-[100vw] transition-all h-[100vh] top-0 bottom-0 left-0 bg-slate-100",
          {
            "translate-x-[101vw]": !showContacts,
            "translate-x-0": showContacts,
          }
        )}
      >
        <header
          className={cn(
            montserrat.className,
            "px-4 py-3 flex justify-between items-center text-xl text-white bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"
          )}
        >
          <span className="material-symbols-outlined text-white focus:text-slate-500">
            call
          </span>
          <div>Contacts</div>
          <button
            onClick={() => setShowContacts(false)}
            className="w-6 h-6 flex items-center justify-center"
          >
            <span className="material-symbols-outlined text-white focus:text-slate-500">
              close
            </span>
          </button>
        </header>
        <div>
          <div className="p-2 r flex">
            <div className="gap-x-2 flex bg-white items-center border border-gray-300 p-2 w-full rounded-md focus-within:outline-none focus-within:ring-2 focus-within:ring-violet-700 focus-within:border-transparent">
              <span className="material-symbols-outlined text-slate-400">
                search
              </span>
              <input
                value={contactSearchText}
                placeholder="Search Contacts"
                className="border-none focus:outline-none w-full text-md text-slate-500 placeholder-slate-300"
                onChange={(e) => setContactsSearchText(e.currentTarget.value)}
              />
              {searchText.length ? (
                <button
                  onClick={() => setContactsSearchText("")}
                  className="w-6 h-6 flex items-center justify-center"
                >
                  <span className="material-symbols-outlined text-slate-400 focus:text-slate-500">
                    close
                  </span>
                </button>
              ) : null}
            </div>
          </div>
          <div className="px-2 flex flex-col gap-y-2">
            {filteredContacts.map((contact, i) => (
              <Contact contact={contact} key={`${contact.company}-${i}`} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
