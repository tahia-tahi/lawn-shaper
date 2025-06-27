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
import Dashboard from "../Components/Dashboard";
import Overview from "../Pages/Overview";
import TermsAndConditions from "../Pages/TermsAndConditions";
import Contact from "../Pages/Contact";
import React from "react";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children: [
            {
                path: '/',
                loader: () => fetch('https://lawn-shaper-server.vercel.app/tips'),
                Component: Home
            },
            {
                path: '/explore',
                loader: () => fetch('https://lawn-shaper-server.vercel.app/gardeners'),
                Component: ExploreGardeners,
                hydrateFallbackElement: <Loading></Loading>

            },
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>,
                children: [
                    {
                        path: '/dashboard/mytips',
                        loader: () => fetch(`https://lawn-shaper-server.vercel.app/tips/my/all`),
                        element: <PrivateRoute>
                            <MyTips></MyTips>
                        </PrivateRoute>,
                        hydrateFallbackElement: <Loading></Loading>
                    },
                    {
                        path: '/dashboard/sharetip',
                        element: <PrivateRoute>
                            <ShareTip></ShareTip>
                        </PrivateRoute>
                    },
                    {
                        path: '/dashboard/overview',
                        element: <Overview></Overview>
                    }
                ]

            },
            {
                path: '/browse',
                loader: () => fetch(`https://lawn-shaper-server.vercel.app/tips`),
                Component: BrowseTips,
                hydrateFallbackElement: <Loading></Loading>

            },
            {
                path: '/detail/:id',
                loader: ({ params }) => fetch(`https://lawn-shaper-server.vercel.app/tips/${params.id}`),
                element: <PrivateRoute>
                    <TipsDetail></TipsDetail>
                </PrivateRoute>,
                hydrateFallbackElement: <Loading></Loading>


            },
            {
                path: '/update/:id',
                loader: ({ params }) => fetch(`https://lawn-shaper-server.vercel.app/tips/${params.id}`),
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
            },
            {
                path:'/terms',
                element:<TermsAndConditions></TermsAndConditions>
            },
            {
                path:'/contact',
                Component:Contact
            }
        ]
    }
]);