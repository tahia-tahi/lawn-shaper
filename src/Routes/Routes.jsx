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
import UpdateTips from "../Components/UpdateTips";
import AuthLayout from "../Layout/AuthLayout";
import PrivateRoute from "../Provider/PrivateRoute";
import Loading from "../Components/Loading";

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
                loader: () => fetch('http://localhost:3000/gardeners'),
                Component: ExploreGardeners,
                hydrateFallbackElement: <Loading></Loading>

            },
            {
                path: '/mytips',
                loader: () => fetch(`http://localhost:3000/tips/my/all`),
                element: <PrivateRoute>
                    <MyTips></MyTips>
                </PrivateRoute>,
                hydrateFallbackElement: <Loading></Loading>

            },
            {
                path: '/sharetip',
                element: <PrivateRoute>
                    <ShareTip></ShareTip>
                </PrivateRoute>
            },
            {
                path: '/browse',
                loader: () => fetch(`http://localhost:3000/tips`),
                Component: BrowseTips,
                hydrateFallbackElement: <Loading></Loading>

            },
            {
                path: '/detail/:id',
                loader: ({ params }) => fetch(`http://localhost:3000/tips/${params.id}`),
                Component: TipsDetail,
                hydrateFallbackElement: <Loading></Loading>


            },
            {
                path: '/update/:id',
                loader: ({ params }) => fetch(`http://localhost:3000/tips/${params.id}`),
                Component: UpdateTips,
                hydrateFallbackElement: <Loading></Loading>

            },
            {
                path: '/auth',
                Component: AuthLayout,
                children: [

                    {
                        path: '/auth/login',
                        Component: LogIn
                    },
                    {
                        path: '/auth/signup',
                        Component: SignUp
                    },


                ]
            },

            {
                path: '/*',
                Component: ErrorPage
            }
        ]
    }
]);