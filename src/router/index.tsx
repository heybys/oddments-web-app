import {createBrowserRouter} from "react-router-dom";
import {Layout} from "@/components/Layout";
import {NotFoundPage} from "@/pages/NotFoundPage";
import {LoginPage} from "@/pages/login/LoginPage";
import {HomePage} from "@/pages/HomePage";
import {FoodPage} from "@/pages/food/FoodPage";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: '',
        element: <HomePage/>
      },
      {
        path: '/food',
        element: <FoodPage/>
      },
      {
        path: '/login',
        element: <LoginPage/>
      }
    ],
  },
  {
    path: '*',
    element: <NotFoundPage/>
  }
])

export {router};