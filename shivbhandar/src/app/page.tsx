"use client";

import { useState } from "react";
import Items from "./components/Items";
import Contacts from "./components/Contacts";

export default function Home() {
  const [showContacts, setShowContacts] = useState(false);

  return (
    <main className="flex min-h-screen flex-col bg-slate-100">
      <Items setShowContacts={setShowContacts} />
      <Contacts showContacts={showContacts} setShowContacts={setShowContacts} />
    </main>
  );
}
