import React, { useState, useEffect } from "react";

const useRestaurantMenu = (resId) => {
  const [restaurantData, setRestaurantData] = useState({});
  const [restaurantMenu, setRestaurantMenu] = useState([]);

  useEffect(() => {
    fetchMenuData(resId);
  }, []);

  const fetchMenuData = async (id) => {
    const response = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.07480&lng=72.88560&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
    );
    const json = await response.json();
    setRestaurantMenu( json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.slice(2));
    setRestaurantData(json?.data?.cards[2]?.card?.card?.info);
  };
  return [restaurantData, restaurantMenu];
};

export default useRestaurantMenu;
