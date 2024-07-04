import { useEffect, useState } from "react";
import RestoCard from "./RestoCard";
import Shimmer from "./Shimmer";
import { SWIGGY_API } from "../utils/constant";
import NotFound from "./NotFound";

const Body = () => {
  const [restoList, setRestoList] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [searchedList, setSearchList] = useState([]);

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

  return (
    <div className="body">
      <div className="body-header">
        <h2>What's on your mind?</h2>
        <div class="searchbar-container">
          <div className="input-wrapper">
            <input
              type="text"
              class="search-input"
              placeholder="Search for restaurants"
              maxlength="200"
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
      </div>
      <div className="resto-container">
        {restoList?.length === 0 ? (
          <Shimmer />
        ) : searchedList?.length === 0 ? (
          <NotFound text={"No Restaurants Found!"}/>
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
