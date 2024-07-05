import { useEffect, useState } from "react";
import RestoCard from "./RestoCard";
import Shimmer from "./Shimmer";
import { SWIGGY_API } from "../utils/constant";
import NotFound from "./NotFound";
import useOnlineStatus from "../hooks/useOnlineStatus";

const Body = () => {
  const [restoList, setRestoList] = useState([]);
  const [searchedList, setSearchList] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  let onlineStatus = useOnlineStatus();

  useEffect(() => {
    fetchRestoData();
  }, []);

  useEffect(() => {
    const searchResponse = restoList.filter((res) =>
      res.info.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    setSearchList(searchResponse);
  }, [searchInput]);

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

  const handleFilterClicked = () => {
    const filteredList = restoList.filter((resto) => resto.info.avgRating > 4);
    setRestoList(filteredList);
  };

  const handleSortByDelivery = () => {
    const filteredList = restoList.sort(
      (a, b) => a.info.sla.deliveryTime - b.info.sla.deliveryTime
    );
    console.log(filteredList)
    setRestoList(filteredList);
    setSearchList(filteredList)
  };

  if (onlineStatus === false) {
    return <h1>Looks like you are offline</h1>;
  }

  return (
    <div className="body">
      <div className="body-header">
        <h2>What's on your mind?</h2>
        <div className="searchbar-container">
          <div className="input-wrapper">
            <input
              type="text"
              className="search-input"
              placeholder="Search for restaurants"
              maxLength="200"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <span
              onClick={() => {
                setSearchInput("");
                fetchRestoData();
              }}
              style={{ cursor: "pointer" }}
            >
              ✖
            </span>
          </div>
        </div>
      </div>
      <hr style={{ width: "100%" }} />
      <div className="filter">
        <button className="filter-btn" onClick={handleFilterClicked}>
          Top Rated Restaurants
        </button>
        <button className="filter-btn" onClick={handleSortByDelivery}>
          Delivery Time
        </button>
      </div>
      <div className="resto-container">
        {restoList?.length === 0 ? (
          <Shimmer />
        ) : searchedList?.length === 0 ? (
          <NotFound text={"No Restaurants Found!"} />
        ) : (
          searchedList?.map((resData) => {
            return <RestoCard key={resData.info.id} {...resData.info} />;
          })
        )}
      </div>
    </div>
  );
};

export default Body;
