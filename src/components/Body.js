import RestaurantCard, {RestaurantCardWithPromotedLabel} from './RestaurantCard'
import { useCallback, useContext, useEffect, useState } from 'react' //named import
import Shimmer from './Shimmer'
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus"
import UserContext from '../utils/UserContext';
import resData, {liveDataLatest} from '../utils/mockData.js';
import InfiniteScroll from 'react-infinite-scroll-component';

const PromotedRestaurant = RestaurantCardWithPromotedLabel(RestaurantCard);

const Body = () => {
    const [listOfRestaurants, setListOfRestaurant] = useState([]); //listOfRestaurants = []
    const [filteredRestaurants, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [hasMoreData, setHasMoreData] = useState(true);
    useEffect(()=>{
        fetchRestaurantData();
    }, []);

    
    // const fetchRestaurantData = async (is_infinite) => {
    //     const fetch_data = await fetch('https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.849801370624276&lng=80.22975625461623&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
    //     // console.log(fetch_data);
    //     const rest_data = await fetch_data.json();
    //     const restaurants_list = rest_data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    //     console.log(restaurants_list);
    //     setListOfRestaurant(restaurants_list);
    //     if(!is_infinite){
    //         setFilteredRestaurant(restaurants_list.concat(restaurants_list));
    //     }
    //     else{
    //         setListOfRestaurant(restaurants_list);
    //     }
    // };
    const fetchRestaurantData = () => {
        setListOfRestaurant(liveDataLatest);
        setFilteredRestaurant(liveDataLatest.concat(liveDataLatest));
    }

    const fetchMoreData = () => {
        if(filteredRestaurants.length>20){
            setHasMoreData(false);
        }
        else{
            setTimeout(() => {setFilteredRestaurant(filteredRestaurants.concat(liveDataLatest));}, 2000);
        }
    }


    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false){
        return (<h1>You are offline. Please check your internet connection.</h1>)
    }
    return listOfRestaurants.length == 0 ? <Shimmer /> :(
        <InfiniteScroll
          dataLength={filteredRestaurants.length}
          next={fetchMoreData}
          hasMore={hasMoreData}
          loader={<div className="shimmer-card"><div className="shimmer-img"></div></div>}
        >
            <div className="body">
                <div className='filter'>
                    <div className="search-bar">
                        <input type="text" placeholder="Search resturant..."  value={searchText} onChange={(e)=>{
                                setSearchText(e.target.value);
                            }
                        }></input>
                        <button onClick={() => {
                            setFilteredRestaurant(listOfRestaurants.filter((restaurant) => restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())));
                        }}>Search</button>
                    </div>
                </div>
                <div className="res-container">
                    {
                        filteredRestaurants.map(restaurant => (<Link to={"restaurants/"+restaurant.info.id}>
                            {restaurant.info.isOpen? (<PromotedRestaurant key={restaurant.info.id} resData={restaurant} />): (<RestaurantCard key={restaurant.info.id} resData={restaurant}/>)}
                            </Link>))
                    }
                </div>
            </div>
        </InfiniteScroll>
    )
}

export default Body;


