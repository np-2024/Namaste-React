import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import RatingStar from "./RatingStar";
import RestaurantMenuShimmer from "./RestaurantMenuShimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [restaurantData, setRestaurantData] = useState();
  const [restaurantMenu, setRestaurantMenu] = useState([]);

  useEffect(() => {
    fetchMenuData(resId);
  }, []);

  const fetchMenuData = async (id) => {
    const response = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.07480&lng=72.88560&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
    );
    const json = await response.json();
    const { itemCards } =
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card;
    setRestaurantMenu(itemCards);
    setRestaurantData(json?.data?.cards[2]?.card?.card?.info);
  };

  console.log(restaurantMenu);

  const formatPrice = (price) => {
    let str = price.toString().split("");
    return "₹" + str.slice(0, 3).join("") + "." + str.slice(3).join("");
  };

  return restaurantData?.length === 0 ? (
    <RestaurantMenuShimmer />
  ) : (
    <div className="restaurant-wrapper">
      <h1 className="restaurant-name">{restaurantData?.name}</h1>
      <div className="restaurant-data">
        <h5 className="rating">
          <RatingStar />
          {restaurantData?.avgRating} ( {restaurantData?.totalRatingsString} )
        </h5>
        <span>•</span>
        <h5>{restaurantData?.sla?.deliveryTime} mins</h5>
        <span>•</span>
        <h5>{restaurantData?.costForTwoMessage}</h5>
      </div>
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
                    className="menu-img"
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${card.info.imageId}`}
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
