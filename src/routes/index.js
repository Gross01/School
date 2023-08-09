import ClassChoose from "../pages/ClassChoose";
import Login from "../pages/Login";

export const publicRoutes = [
    {path: "/login", element: Login},
    {path: "*", element: Login},
]

export const privateRoutes = [
    {path: '/choose', element: ClassChoose},
    {path: '*', element: ClassChoose},
]