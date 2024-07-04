import RatingStar from "./RatingStar"
import { CDN_URL } from "../utils/constant";

const RestoCard = ({
  name,
  cuisines,
  avgRating,
  sla,
  cloudinaryImageId,
  areaName,
  costForTwo,
}) => {
  return (
    <div className="resto-card">
      <div>
        <img
          src={`${CDN_URL}${cloudinaryImageId}`}
        />
      </div>
      <div className="resto-content">
        <h3>{name}</h3>
        <div className="subtitle-1">
          <h5 className="rating">
            <RatingStar />
            {avgRating} stars
          </h5>
          <span>•</span>
          <h5>{sla.deliveryTime} mins</h5>
          <span>•</span>
          <h5>{costForTwo}</h5>
        </div>
        <div className="subtitle-2">
          <h5>{cuisines.join(", ")}</h5>
          <h5>{areaName}</h5>
        </div>
      </div>
    </div>
  );
};

export default RestoCard;
