import { formatPrice } from "../utils/utilFunctions";
import { SWIGGY_ASSETS_API } from "../utils/constant";

const ItemList = (card) => {
  return (
    <li key={card.info.id} className="mb-2 mt-2">
    <div className="flex justify-between">
      <div className="">
        <div className="flex items-start flex-col gap-1">
          <h4 className="m-0">
            {card.info.itemAttribute.vegClassifier === "VEG" ? (
              <span>🟢</span>
            ) : (
              <span>🔴</span>
            )}
            {card.info.name}
          </h4>
          <h4 className="bg-blue-200 m-0">
            {card.info.price
              ? formatPrice(card.info.price)
              : formatPrice(card.info.defaultPrice)}
          </h4>
        </div>
        <p>{card.info.description}</p>
      </div>
      <div className="flex justify-end max-w-40 ml-auto max-h-40">
        <img
          loading="lazy"
          className="w-full h-full"
          alt="menu-img"
          src={`${SWIGGY_ASSETS_API}${card?.info?.imageId}`}
        />
      </div>
    </div>
    <hr />
  </li>
  )
}

export default ItemList