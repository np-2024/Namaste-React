import { formatPrice } from "../utils/utilFunctions";
import { CDN_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../redux/cartSlice";

const ItemList = ({ card, removeBtn }) => {
  const { id, name, itemAttribute, price, defaultPrice, description, imageId } =
    card.info;

  const dispatch = useDispatch();
  const handleAddItem = (item) => dispatch(addItem(item));
  const handleRemoveItem = (item) => dispatch(removeItem(item.info.id));

  return (
    <div key={id} className="mb-2 mt-2 border-b-2 flex justify-between p-2">
      <div className="w-9/12 text-left">
        {itemAttribute?.vegClassifier === "VEG" ? (
          <span>🟢</span>
        ) : (
          <span>🔴</span>
        )}
        {name}
        <span className="bg-blue-200 m-0 ml-2">
          {price ? formatPrice(price) : formatPrice(defaultPrice)}
        </span>
        <p>{description.slice(0, 100)}...</p>
      </div>
      <div className="w-2/12 relative">
        {imageId && (
          <>
            <img
              loading="lazy"
              className="w-full h-full"
              alt="menu-img"
              src={`${CDN_URL}${imageId}`}
            />
            {removeBtn ? (
              <button
                onClick={() => handleRemoveItem(card)}
                className="p-2 text-xs font-medium absolute top-0 left-1/3 text-white bg-black"
              >
                Remove -
              </button>
            ) : (
              <button
                onClick={() => handleAddItem(card)}
                className="p-2 text-xs font-medium absolute top-0 left-1/3 text-white bg-black"
              >
                Add +
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ItemList;
