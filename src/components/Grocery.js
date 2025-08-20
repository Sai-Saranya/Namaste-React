import UserContext from "../utils/UserContext"
import { useContext } from "react";


const Grocery = () => {
    const {loggedInUser, setLoggedUserName} = useContext(UserContext);
    setLoggedUserName("i64145");
    return (
        <>
            <div className="text-bold">{loggedInUser}</div>
            <div>This is the grocery app</div>
        </>
    )
}

export default Grocery;