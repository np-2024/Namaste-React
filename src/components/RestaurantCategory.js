import ItemList from "./ItemList";

const RestaurantCategory = ({
  itemCards,
  title,
  showIndex,
  setShowIndex,
  currentIndex,
}) => {
  return (
    itemCards?.length > 0 && (
      <div className="mb-2">
        <div
          onClick={() => setShowIndex(currentIndex)}
          className="cursor-pointer bg-slate-100 rounded-lg p-2 flex items-center justify-between"
        >
          <h1 className="font-semibold text-2xl">
            <span className="underline">{title}</span>({itemCards?.length})
          </h1>
          <div className="text-2xl">⬇️</div>
        </div>
        {showIndex &&
          itemCards?.map(({ card }) => (
            <ItemList {...card} key={card.info.id} />
          ))}
      </div>
    )
  );
};

export default RestaurantCategory;
