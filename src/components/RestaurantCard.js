import { CDN_URL } from "../utils/constants";
import { MdStarRate, MdOutlineLocationOn } from "react-icons/md";
const RestaurantCard = (props) => {
    const { resData } = props;
    const {name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId, locality } = resData?.info
    
    return (
        <div className="res-card">
            <img src={CDN_URL+cloudinaryImageId} className="res-logo"></img>
            <div className="res-meta-data">
                <b>{name.length>20 ? name.slice(0,18)+"...": name}</b>
                <p>{cuisines.join(', ').length>35? cuisines.join(", ").slice(0,32)+".." : cuisines.join(", ")}</p>
                <div className="res-sla">
                    <p className="res-rating"><MdStarRate className= "star-rating-logo" style={avgRating>=4?{backgroundColor: "var(--green)"}: {backgroundColor: "var(--red)"}}/>&nbsp;{avgRating} stars</p>
                    <p className="cost-for-two">{costForTwo}</p>
                    <p className="res-delivery-time">{sla.deliveryTime} mins</p>
                </div>
                <p><MdOutlineLocationOn />{locality}</p>
            </div>
            
            
            
        </div>
    )
}

export const RestaurantCardWithPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label class="absolute z-40 p-3 mx-1 bg-black text-white rounded-lg">Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default RestaurantCard;