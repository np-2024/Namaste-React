import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import RatingStar from "./RatingStar";
import RestaurantMenuShimmer from "./RestaurantMenuShimmer";
import useRestaurantMenu from "../hooks/useRestaurantMenu";
import { formatPrice } from "../utils/utilFunctions";
import { SWIGGY_ASSETS_API } from "../utils/constant";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const navigate = useNavigate();
  const [restaurantData, restaurantMenu] = useRestaurantMenu(resId);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return restaurantData?.length === 0 ? (
    <RestaurantMenuShimmer />
  ) : (
    <div className="p-3 mt-14">
      <button
        onClick={() => navigate("/")}
        className="m-0 flex gap-2 items-center mb-3 cursor-pointer"
      >
        <div>◀</div>Back to Home
      </button>
      {restaurantData && restaurantData?.name && (
        <div className="pt-3 pr-2">
          <h1 className="m-1 font-semibold text-4xl">{restaurantData?.name}</h1>
          <div className="flex items-center gap-2">
            <h5 className="flex gap-1 m-0">
              <RatingStar />
              {restaurantData?.avgRating} ( {restaurantData?.totalRatingsString}{" "}
              )
            </h5>
            <span>•</span>
            <h5 className="m-0">{restaurantData?.sla?.deliveryTime} mins</h5>
            <span>•</span>
            <h5 className="m-0">{restaurantData?.costForTwoMessage}</h5>
          </div>
        </div>
      )}
      {restaurantMenu?.length === 0 ? (
        <RestaurantMenuShimmer />
      ) : (
        <ul className="list-none m-0 p-0 mt-5 mb-5">
          {restaurantMenu?.map(({ card }) => (
            <li key={card.info.id}>
              <div className="flex justify-between">
                <div className="w-2/3">
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
                <div className="flex justify-end max-w-40 ml-auto max-h-44">
                  <img
                    loading="lazy"
                    className="w-full h-full"
                    src={`${SWIGGY_ASSETS_API}${card.info.imageId}`}
                  />
                </div>
              </div>
              <hr />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RestaurantMenu;
