import {
    createBrowserRouter,
} from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AddFood from "../Pages/AddFood";
import PrivateRoutes from "../Route/PrivateRoute";
import Fridge from "../Pages/Fridge";
import FoodDetails from "../Pages/FoodDetails";
import MyItems from "../Pages/MyItems";
import Error from "../Pages/Error";

const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        errorElement: <Error></Error>,
        children: [
            {
                index: true,
                loader: ()=>fetch('http://localhost:3000/foods'),
                Component: Home
            },
            {
                path: '/login',
                Component: Login
            },
            {
                path: '/register',
                Component: Register
            },
            {
                path: '/fridge',
                loader: ()=>fetch('http://localhost:3000/foods'),
                Component: Fridge
            },
            {
                path: '/add-food',
                element: <PrivateRoutes><AddFood></AddFood></PrivateRoutes>
            },
            {
                path: '/my-items',
                element: <PrivateRoutes><MyItems></MyItems></PrivateRoutes>
            },
            {
                path: '/food-details/:id',
                loader:({params})=>fetch(`http://localhost:3000/foods/${params.id}`),
                element: <PrivateRoutes><FoodDetails></FoodDetails></PrivateRoutes>
            },
        ]
    },
]);
export default router;