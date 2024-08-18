import {createBrowserRouter} from "react-router-dom";
import {Layout} from "@/components/Layout";
import {NotFoundPage} from "@/pages/NotFoundPage";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: '',
        element: <div>HomePage</div>
      },
      {
        path: '/food',
        element: <div>FoodPage</div>
      },
      {
        path: '*',
        element: <NotFoundPage/>
      },
    ],
  }
])

export {router};