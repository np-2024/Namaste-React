import { useContext, useEffect, useState } from "react";
import RestoCard from "./RestoCard";
import Shimmer from "./Shimmer";
import { SWIGGY_API } from "../utils/constant";
import NotFound from "./NotFound";
import useOnlineStatus from "../hooks/useOnlineStatus";
import withOpenStatus from "../hof/withOpenStatus";
import UserContext from "../context/UserContext";

const Body = () => {
  const [restoList, setRestoList] = useState([]);
  const [searchedList, setSearchList] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  let onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  useEffect(() => {
    fetchRestoData();
  }, []);

  const fetchRestoData = async () => {
    const response = await fetch(SWIGGY_API);
    const json = await response.json();
    setRestoList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setSearchList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const handleSearch = () => {
    const searchResponse = restoList?.filter((res) =>
      res.info.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    setSearchList(searchResponse);
  };

  const handleFilterClicked = () => {
    const filteredList = restoList?.filter((resto) => resto.info.avgRating > 4);
    setRestoList(filteredList);
    setSearchList(filteredList);
  };

  const handleSortByDelivery = () => {
    const filteredList = restoList.sort(
      (a, b) => a.info.sla.deliveryTime - b.info.sla.deliveryTime
    );
    setRestoList(filteredList);
    setSearchList(filteredList);
  };

  if (onlineStatus === false) {
    return <h1>Looks like you are offline</h1>;
  }

  const RestoCardOpen = withOpenStatus(RestoCard);

  return (
    <div className="p-5 flex flex-col justify-center gap-2 mt-14">
      <div className="body-header">
        <h2 className="m-0 mb-2 font-extrabold text-2xl">
          Hi {loggedInUser},<br /> What's on your mind?
        </h2>
        <div className="flex gap-2">
          <div className="flex border border-slate-500 border-solid pt-2 pb-2 pl-3 pr-3 w-72 rounded-md">
            <input
              data-testid="searchInput"
              type="text"
              className="text-sm w-full h-full border-0 outline-0"
              placeholder="Search for restaurants"
              maxLength="200"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button onClick={handleSearch} className="p-1">
              Search
            </button>
          </div>
        </div>
      </div>
      <hr className="w-full" />
      <div>
        <button className="mr-2" onClick={handleFilterClicked}>
          Top Rated Restaurants
        </button>
        <button onClick={handleSortByDelivery}>Delivery Time</button>
      </div>
      <div className="flex flex-wrap z-0">
        {searchedList?.map((resData) => {
          return resData?.info?.isOpen ? (
            <RestoCardOpen key={resData?.info?.id} resData={resData?.info} />
          ) : (
            <RestoCard key={resData?.info?.id} resData={resData?.info} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
