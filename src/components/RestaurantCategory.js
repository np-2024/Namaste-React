import ItemList from "./ItemList";

const RestaurantCategory = ({ itemCards, title }) => {
  return (
    <div className="mb-2">
      <div className="bg-slate-100 rounded-lg p-2 flex items-center justify-between">
        <h1 className="font-semibold text-2xl">
          <span className="underline">{title}</span>({itemCards?.length})
        </h1>
        <div className="cursor-pointer text-2xl">⬇️</div>
      </div>
      <ul className="list-none m-0 p-0 mt-1 mb-5">
        {itemCards?.map(({ card }) => (
          <ItemList {...card} />
        ))}
      </ul>
    </div>
  );
};

export default RestaurantCategory;
