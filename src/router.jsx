import { createBrowserRouter } from "react-router-dom";

//Layouts (Parents)
import RootLayout from "./app/RootLayout";
import PublicLayout from "./app/public/PublicLayout";
import AuthLayout from "./app/auth/AuthLayout";
import PrivateLayout from "./app/private/PrivateLayout"




//Pages (children)
import Home from './app/public/Home'
import Contact from "./app/public/Contact";
import About from "./app/public/About";
import LoginPage from "./app/auth/LoginPage";
import RegisterPage from "./app/auth/RegisterPage";
import PrivatePage from "./app/private/PrivatePage";
import ProductDetails from "./app/public/ProductDetails";
import CheckOut from "./app/private/CheckOut";



export const router = createBrowserRouter([
    {
        path:"/",
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <PublicLayout />,
                children: [
                    {
                        index: true,
                        element: <Home />,
                    },
                    {
                        path:"contact",
                        element: <Contact />
                    },
                    {
                        path:"about",
                        element: <About />
                    },
                    {
                        path:"/details/:id",
                        element:<ProductDetails />
                    }
                    
                ]
            },
            {
                path:"auth",
                element:<AuthLayout />,
                children: [
                    {
                        path: "login",
                        element: <LoginPage />

                    },
                    {
                        path:"register",
                        element: <RegisterPage />
                    }
                ]
                
            },
            {
                path:"private",
                element: <PrivateLayout />,
                children: [
                    {
                        path: 'privatepage',
                        element: <PrivatePage />
                    },
                    {
                        path: "checkout",
                        element: <CheckOut />
                    }

                    
                ]
            }


        ]
    }
])