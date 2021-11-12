import { NavLink, Outlet} from "react-router-dom";
const AdminLayout = () =>{
    return(
        <div>
            <div className="flex space-x-5">
            <NavLink to="/admin" >
                Dashboard
            </NavLink>
            <NavLink to="addproduct2" >
                Quản lý sản phẩm
            </NavLink>
            <NavLink to= "products/${id}/edit" >
                Quản lý sản phẩm
            </NavLink>
            <NavLink to="/"  className="text-red-500">
                Back to website
            </NavLink>
            </div>
            <Outlet />
      </div>
    )
}

export default AdminLayout;