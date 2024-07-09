import { formatPrice } from "../utils/utilFunctions";
import { CDN_URL } from "../utils/constant";

const ItemList = ({
  info: { id, name, itemAttribute, price, defaultPrice, description, imageId },
}) => {
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
        <p>{description}</p>
      </div>
      <div className="w-2/12">
        {imageId && (
          <img
            loading="lazy"
            className="w-full h-full"
            alt="menu-img"
            src={`${CDN_URL}${imageId}`}
          />
        )}
      </div>
    </div>
  );
};

export default ItemList;
