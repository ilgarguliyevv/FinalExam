import Add from "../pages/Add"
import Basket from "../pages/Basket"
import Detail from "../pages/Details"
import Home from "../pages/Home"
import UserRoot from "../pages/User/UserRoot"
import Wishlist from "../pages/Wishlist"

const routes = [
    {
      path: "/",
      element: <UserRoot/>,
      children: [
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/basket",
            element: <Basket/>
        },
        {
            path: "/wishlist",
            element: <Wishlist/>
        },
        {
            path: "/detail/:id",
            element: <Detail/>
        },
        {
          path: "/admin",
          element: <Add/>
      }
      ]
    },
  ]

  export default routes