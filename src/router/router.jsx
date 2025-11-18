import {createBrowserRouter} from "react-router";
import RootLayout from '../layout/RootLayout';
import Homepage from '../pages/Homepage';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <Homepage />,
            },
        ],
    },
]);