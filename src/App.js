import React, {lazy, Suspense, useContext, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from './components/Header'
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";
import Cart from "./components/Cart";

const Grocery = lazy(()=> import("./components/Grocery"));



const AppLayout = () => {
    const {loggedInUser} = useContext(UserContext); 
    const [loggedUserName, setLoggedUserName] = useState(loggedInUser);
    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{loggedInUser: loggedUserName, setLoggedUserName}}>
                <div className="app">
                    <Header />
                    <Outlet /> 
                </div>
            </UserContext.Provider>
        </Provider>
    )
}

//create configuration 
const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/grocery',
                element: <Suspense fallback={<Shimmer/>}><Grocery /></Suspense>
            },
            {
                path: '/restaurants/:resId',
                element: <RestaurantMenu />
            },
            {
                path: '/cart',
                element: <Cart />
            }
        ]
    },
    
])

const root = ReactDOM.createRoot(document.getElementById("root")); // since we are daling with browser, we need to create root with DOM
root.render(<RouterProvider router={appRouter}></RouterProvider>);
