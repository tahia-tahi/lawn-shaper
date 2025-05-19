import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import ExploreGardeners from "../Pages/ExploreGardeners";
import MyTips from "../Pages/MyTips";
import ShareTip from "../Pages/ShareTip";
import SignUp from "../Pages/SignUp";
import LogIn from "../Pages/LogIn"
import ErrorPage from "../Pages/ErrorPage";

export const router = createBrowserRouter([
    {
        path:'/',
        Component:MathMLElement,
        children:[
            {
                path:'/',
                Component:Home
            },
            {
                path:'/explore',
                Component:ExploreGardeners
            },
            {
                path:'/mytips',
                Component:MyTips
            },
            {
                path:'/sharetip',
                Component:ShareTip
            },
            {
                path:'/login',
                Component:LogIn
            },
            {
                path:'/signup',
                Component:SignUp
            },
            {
                path: '/error',
                Component:ErrorPage
            }
        ]
    }
]);