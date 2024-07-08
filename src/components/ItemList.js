import { formatPrice } from "../utils/utilFunctions";
import { SWIGGY_ASSETS_API } from "../utils/constant";

const ItemList = ({
  info: { id, name, itemAttribute, price, defaultPrice, description, imageId },
}) => {
  return (
    <li key={id} className="mb-2 mt-2">
      <div className="flex justify-between">
        <div className="">
          <div className="flex items-start flex-col gap-1">
            <h4 className="m-0">
              {itemAttribute?.vegClassifier === "VEG" ? (
                <span>🟢</span>
              ) : (
                <span>🔴</span>
              )}
              {name}
              <span className="bg-blue-200 m-0 ml-2">
                {price ? formatPrice(price) : formatPrice(defaultPrice)}
              </span>
            </h4>
          </div>
          <p>{description}</p>
        </div>
        <div className="flex justify-end max-w-40 ml-auto max-h-40">
          <img
            loading="lazy"
            className="w-full h-full"
            alt="menu-img"
            src={`${SWIGGY_ASSETS_API}${imageId}`}
          />
        </div>
      </div>
      <hr />
    </li>
  );
};

export default ItemList;
