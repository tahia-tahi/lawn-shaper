import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import ExploreGardeners from "../Pages/ExploreGardeners";
import MyTips from "../Pages/MyTips";
import ShareTip from "../Pages/ShareTip";
import SignUp from "../Pages/SignUp";
import LogIn from "../Pages/LogIn"
import ErrorPage from "../Pages/ErrorPage";
import MainLayout from "../Layout/MainLayout";
import BrowseTips from "../Pages/BrowseTips";
import TipsDetail from "../Pages/TipsDetail";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children: [
            {
                path: '/',
                loader: () => fetch('http://localhost:3000/tips'),
                Component: Home
            },
            {
                path: '/explore',
                Component: ExploreGardeners
            },
            {
                path: '/mytips',
                loader: () => fetch(`http://localhost:3000/tips`),
                 Component: MyTips
            },
            {
                path: '/sharetip',
                Component: ShareTip
            },
            {
                path: '/browse',
                loader: () => fetch(`http://localhost:3000/tips`),
                Component: BrowseTips,
            },
            {
                path: '/detail/:id',
                loader: ({ params }) => fetch(`http://localhost:3000/tips/${params.id}`),
                Component: TipsDetail

            },
            {
                path: '/login',
                Component: LogIn
            },
            {
                path: '/signup',
                Component: SignUp
            },
            {
                path: '/error',
                Component: ErrorPage
            }
        ]
    }
]);