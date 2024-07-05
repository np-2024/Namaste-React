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
    <div className="restaurant-wrapper">
      <button onClick={() => navigate("/")} className="backbtn">
        <div>◀</div>Back to Home
      </button>
      {restaurantData && restaurantData?.name && (
        <div className="restaurant-header">
          <h1 className="restaurant-name">{restaurantData?.name}</h1>
          <div className="restaurant-data">
            <h5 className="rating">
              <RatingStar />
              {restaurantData?.avgRating} ( {restaurantData?.totalRatingsString}{" "}
              )
            </h5>
            <span>•</span>
            <h5>{restaurantData?.sla?.deliveryTime} mins</h5>
            <span>•</span>
            <h5>{restaurantData?.costForTwoMessage}</h5>
          </div>
        </div>
      )}
      {restaurantMenu?.length === 0 ? (
        <RestaurantMenuShimmer />
      ) : (
        <ul className="restaurant-menu-list">
          {restaurantMenu?.map(({ card }) => (
            <li key={card.info.id}>
              <div className="restaurant-menu-wrapper">
                <div className="restaurant-dec-wrapper">
                  <div className="restaurant-desc">
                    <div>
                      {card.info.itemAttribute.vegClassifier === "VEG" ? (
                        <span>🟢</span>
                      ) : (
                        <span>🔴</span>
                      )}
                    </div>
                    <h4>{card.info.name}</h4>
                    <h4 className="highlight">
                      {card.info.price
                        ? formatPrice(card.info.price)
                        : formatPrice(card.info.defaultPrice)}
                    </h4>
                  </div>
                  <p>{card.info.description}</p>
                </div>
                <div className="menu-img-wrapper">
                  <img
                    loading="lazy"
                    className="menu-img"
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
