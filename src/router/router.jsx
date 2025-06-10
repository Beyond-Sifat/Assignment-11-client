import {
    createBrowserRouter,
} from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AddFood from "../Pages/AddFood";
import PrivateRoutes from "../Route/PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
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
                path: '/add-food',
                element: <PrivateRoutes><AddFood></AddFood></PrivateRoutes>
            },
            {
                path: '/food-details',
                element: <PrivateRoutes><AddFood></AddFood></PrivateRoutes>
            },
        ]
    },
]);
export default router;