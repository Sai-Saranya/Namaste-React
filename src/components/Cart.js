import { useDispatch, useSelector } from "react-redux"
import ItemCard from "./ItemCard"
import { clearCart } from "../utils/cartSlice";

const Cart = () =>{

    const cartItems = useSelector((store)=>store.cart.items);
    const dispatch = useDispatch();

    const handleClearCart = () => {dispatch(clearCart())};
    return (
        <div className="text-center m-2 p-5">
            <h1 className="text-2xl font-bold">Cart</h1>
            <button onClick={handleClearCart} className="p-2 m-2 bg-black text-white rounded-lg">Clear</button>
            <div className="w-6/12 m-auto border border-gray p-3 shadow-lg">
                <ItemCard items={cartItems} />
            </div>
        </div>
    )
}

export default Cart;