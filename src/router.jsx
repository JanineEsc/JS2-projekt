import { createBrowserRouter } from "react-router-dom";

//Layouts (Parents)
import RootLayout from "./app/RootLayout";
import PublicLayout from "./app/public/PublicLayout";
import AuthLayout from "./app/auth/AuthLayout";




//Pages (children)
import Home from './app/public/Home'
import Contact from "./app/public/Contact";
import About from "./app/public/About";
import YourProducts from "./app/public/YourProducts";
import Menu from "./app/public/Menu";
import LoginPage from "./app/auth/LoginPage";
import RegisterPage from "./app/auth/RegisterPage";

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
                        path:'about',
                        element: <About />
                    },
                    {
                        path: 'products',
                        element: <YourProducts />
                    },
                    {
                        path: 'menu',
                        element: <Menu />
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
                
            }
            // {
            //     path:"private",
            //     element: <PrivateLayout />,
            //     children: [
            //         {
            //             index: true,
            //             element: <PrivateLayout />
            //         }

                    
            //     ]
            // }


        ]
    }
])