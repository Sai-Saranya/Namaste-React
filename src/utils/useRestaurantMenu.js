import {useEffect, useState} from "react"
import { RESTAURANT_URL } from "../utils/constants";

const useRestaurantMenu = (resID) => {
    const [resInfo, setresInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, []);
    
    const fetchMenu = async () => {
        const data = await fetch(`${RESTAURANT_URL}${resID}`);
        const res_data = await data.json();
        setresInfo(res_data);
    }
    return resInfo;
} 

export default useRestaurantMenu;