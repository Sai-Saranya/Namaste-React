import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MdStarRate, MdOutlineLocationOn } from "react-icons/md";
import { RxDotFilled } from "react-icons/rx";
import { IoFastFoodSharp } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";
import { IoBicycle } from "react-icons/io5";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from './RestaurantCategory'

const RestaurantMenu = () => {
    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);
    const [showCategory, setShowCategory] = useState(null);
    if (resInfo == null) return <Shimmer />;
    const {name, avgRating, costForTwoMessage, cuisines, areaName, totalRatingsString} = resInfo.data.cards[2].card.card.info;
    const {slaString, lastMileTravelString} = resInfo.data.cards[2].card.card.info.sla;
    const categories = resInfo.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((category) => category?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    const required_categories = categories.slice(3, categories.length);
    return (
        <div className="text-center'">
            <h1 className="res-name">{name}</h1>
            <div className="card-background">
                <div className="card">
                    <div className="card-body">
                        <h4 className="res-rating"><MdStarRate className= "star-rating-logo" style={avgRating>=4?{backgroundColor: "var(--green)"}: {backgroundColor: "var(--red)"}}/>&nbsp;{avgRating} stars ({totalRatingsString}) <RxDotFilled />{costForTwoMessage}</h4> 
                        <p className="flex "><IoFastFoodSharp /> {cuisines.join(", ")}</p>
                        <p className="flex"><MdOutlineLocationOn /> {areaName}</p>
                        <p className="flex"><FaRegClock />&nbsp;{slaString}</p>
                        <hr></hr>
                        <p className="flex"><IoBicycle />&nbsp;{lastMileTravelString}</p>
                    </div>
                </div>
            </div>
            <div className="bg-gray-50 p-10 m-auto w-9/12 shadow-lg">
            {categories.map((category, index) => (
                    <RestaurantCategory data={category} showCategory={index===showCategory}
                     setShowCategory={() => setShowCategory(index)}/>
                ))}
            </div>
            
                
            
                
        </div>
    )
}

export default RestaurantMenu;