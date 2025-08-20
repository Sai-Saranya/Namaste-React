import ItemCard from "./ItemCard";
import { useState } from "react";

const RestaurantCategory = ({data, showCategory, setShowCategory }) => {
    const [displayItems, setDisplayItems] = useState(false);
    const showHideCategory = () =>{
        setShowCategory();
        setDisplayItems(!displayItems);
    }
    return (
        <div className="w-9/12 shadow-lg bg-gray-50 m-auto p-2 flex flex-col border-y-2">
            <div className="flex justify-between p-2 my-1 cursor-pointer" onClick={showHideCategory}>
                <span className="font-bold">{data.card.card.title} ({data.card.card.itemCards.length})</span>
                <span>&#8595;</span>
            </div>
                
                <div>
                    {showCategory && displayItems && <ItemCard items={data.card.card.itemCards}/>}
                </div>
        </div>
    )
}

export default RestaurantCategory;