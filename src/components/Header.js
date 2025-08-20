import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {

    const [btnText, setbtnText] = useState("Login")
    const onlineStatus = useOnlineStatus();
    const {loggedInUser} = useContext(UserContext);
    const cartItems = useSelector((store) => store.cart.items);
    return (
        <div className="flex justify-between items-center">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}>
                </img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>OnlineStatus : {onlineStatus? <span>&#9989;</span> : <span>&#128308;</span>}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to='/about'>About Us</Link></li>
                    <li><Link to='/grocery'>Grocery</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to='/cart'>Cart ({cartItems.length})</Link></li>
                    <li>{loggedInUser}</li>
                    {/* <li><button className="login-button" onClick={() =>{
                        setbtnText(btnText == 'Login'? 'Logout': 'Login');
                    }}>{btnText}</button></li> */}
                </ul>
            </div>
        </div>
    );
}

export default Header;