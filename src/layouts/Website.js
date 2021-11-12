import { NavLink, Outlet } from "react-router-dom";
const WebsiteLayout = (props) =>{
    return(
        <div>
        <div className="flex space-x-5">
          <NavLink to="/" >
            Home
          </NavLink>
          <NavLink to="/product" >
            Sản phẩm
          </NavLink>
          <NavLink to="/contact" >
            Liên hệ
          </NavLink>
          <NavLink to="/admin" className="text-red-500">
            Dashboard
          </NavLink>
        </div>
        <Outlet />
      </div>
    )
}

export default WebsiteLayout;