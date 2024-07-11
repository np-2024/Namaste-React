import RatingStar from "./RatingStar";
import { CDN_URL } from "../utils/constant";
import { useNavigate } from "react-router-dom";

const RestoCard = ({ resData }) => {
  const {
    id,
    name,
    cuisines,
    avgRating,
    sla,
    cloudinaryImageId,
    areaName,
    costForTwo,
  } = resData;

  const navigate = useNavigate();
  return (
    <div
      className="cursor-pointer p-2 h-auto w-64 inline-block transition ease-in-out hover:scale-90 hover:bg-gray-200 rounded-lg z-10"
      onClick={() => navigate(`/restaurant/${id}`)}
    >
      <div>
        <img
          loading="lazy"
          className="h-56 w-full rounded-lg"
          src={`${CDN_URL}${cloudinaryImageId}`}
        />
      </div>
      <div>
        <h3 className="m-0 mb-1 font-semibold">{name}</h3>
        <div className="flex gap-1 items-center mb-2">
          <h5 className="flex gap-1">
            <RatingStar />
            {avgRating}
          </h5>
          <span>•</span>
          <h5>{sla?.deliveryTime} mins</h5>
          <span>•</span>
          <h5>{costForTwo}</h5>
        </div>
        <div>
          <h5 className="m-0 text-sm">{cuisines?.join(", ")}</h5>
          <h5 className="m-0 text-sm">{areaName}</h5>
        </div>
      </div>
    </div>
  );
};

export default RestoCard;
