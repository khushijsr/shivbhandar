import { useState } from "react";
import { ItemType } from "../consts/items";
import cn from "classnames";

export default function Item({ item }: { item: ItemType }) {
  const [showPrice, setShowPrice] = useState(false);

  return (
    <div
      className={cn("p-2", {
        "shadow shadow-slate-500/40 rounded-md shadow-xs border-t": showPrice,
      })}
      onClick={() => setShowPrice(true)}
    >
      <div className="text-slate-500 text-lg">{item.name}</div>
      {showPrice ? (
        <div className="flex gap-x-2 border rounded-md mt-2">
          {item.price.map((p, i, arr) => (
            <div
              key={i}
              className={cn("flex-1 p-2", {
                "border-l": i !== 0 && arr.length > 1,
              })}
            >
              <div className="text-base text-slate-600 font-semibold">
                {p.amount}
              </div>
              <div className="text-sm text-slate-500 font-medium	">
                {p.quantity}
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
