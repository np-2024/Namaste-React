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
    <div className="p-5 flex flex-col justify-center gap-2 mt-14">
      <div className="body-header">
        <h2 className="m-0 mb-2 font-extrabold text-2xl">What's on your mind?</h2>
        <div className="flex gap-2">
          <div className="flex border border-slate-500 border-solid pt-2 pb-2 pl-3 pr-3">
            <input
              type="text"
              className="text-sm w-full h-full border-0 outline-0" 
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
              className="cursor-pointer"
            >
              ✖
            </span>
          </div>
        </div>
      </div>
      <hr className="w-full"/>
      <div>
        <button className="mr-2" onClick={handleFilterClicked}>
          Top Rated Restaurants
        </button>
        <button onClick={handleSortByDelivery}>
          Delivery Time
        </button>
      </div>
      <div className="flex flex-wrap">
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
