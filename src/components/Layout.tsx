import {Outlet} from "react-router-dom";
import {GlobalNavigation} from "@/components/GlobalNavigation";

const Layout = () => {

  return (
      <>
        <GlobalNavigation/>
        <div className={'pt-16'}>
          <Outlet/>
        </div>
      </>
  )
}

export {Layout};