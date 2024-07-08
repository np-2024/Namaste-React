import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ itemCards, title }) => {
  const [open, setOpen] = useState(false);
  return (
    itemCards?.length > 0 && (
      <div className="mb-2">
        <div
          onClick={() => setOpen(!open)}
          className="cursor-pointer bg-slate-100 rounded-lg p-2 flex items-center justify-between"
        >
          <h1 className="font-semibold text-2xl">
            <span className="underline">{title}</span>({itemCards?.length})
          </h1>
          <div className="text-2xl">⬇️</div>
        </div>
        {open && (
          <ul className="list-none m-0 p-0 mt-1 mb-5">
            {itemCards?.map(({ card }) => (
              <ItemList {...card} />
            ))}
          </ul>
        )}
      </div>
    )
  );
};

export default RestaurantCategory;
