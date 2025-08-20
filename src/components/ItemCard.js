import { useDispatch } from 'react-redux';
import {CDN_URL} from '../utils/constants'
import { MdStarRate, MdOutlineLocationOn } from "react-icons/md";
import { addItem } from '../utils/cartSlice';

const ItemCard = ({items}) => {
    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        //dispatch an action
        dispatch(addItem(item));
    }

    return (
        <div>
            {items.map((item) => (
                <div className="flex justify-between p-2 border-y-2">
                    <div className='flex flex-col w-9/12'>
                        <span>{item.card.info.name}</span>
                        <span>₹ {item.card.info.price? item.card.info.price/100 :  item.card.info.defaultPrice/100}</span>
                        <span className='flex flex-row'>
                        <MdStarRate className= "star-rating-logo" style={item.card.info.ratings.aggregatedRating.rating>=4?{backgroundColor: "var(--green)"}: {backgroundColor: "var(--red)"}}/>&nbsp;<span>{item.card.info.ratings.aggregatedRating.rating}&nbsp;stars</span> 
                        </span>
                        <p className='text-xs'>{item.card.info.description}</p>
                    </div>
                    <div className='w-3/12 p-4'>
                        <div className='absolute'>
                            <button className='absolute p-2 mx-16 bg-black text-white'
                            onClick={() => handleAddItem(item)}
                            >Add +</button>
                        </div>
                        <img src={CDN_URL+item.card.info.imageId} className='w-full'></img>
                    </div>
                </div>
            ))}
            
        </div>
    )

}

export default ItemCard;