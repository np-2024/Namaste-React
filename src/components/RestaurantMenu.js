import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import RatingStar from "./RatingStar";
import RestaurantMenuShimmer from "./RestaurantMenuShimmer";
import useRestaurantMenu from "../hooks/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

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
        <div className="pt-3 pr-2" key={restaurantData?.id}>
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
        restaurantMenu?.map(({ card: { card } }) => {
          const { itemCards, title } = card;
          return <RestaurantCategory itemCards={itemCards} title={title} key={title}/>;
        })
      )}
    </div>
  );
};

export default RestaurantMenu;
