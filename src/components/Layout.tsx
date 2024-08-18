import {Outlet} from "react-router-dom";
import {GlobalNavigation} from "@/components/GlobalNavigation";

const Layout = () => {

  return (
      <>
        <GlobalNavigation/>
        <Outlet/>
      </>
  )
}

export {Layout};