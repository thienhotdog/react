import { NavLink } from "react-router-dom";
import "../../assets/website.css";

const Header = () =>{
    return(
       <header className="header">
           <nav className="header_navbar">
                <ul className="navbar-list">
                    <img src="https://snh.vn/wp-content/uploads/2016/01/logo-adidas.png" className="navbar-list-img" />
                </ul>

                <ul className="navbar-list">
                    <li className="navbar-item">
                        <NavLink to="" className="navbar-item-link">Shop</NavLink>
                    </li>
                    <li className="navbar-item">
                        <NavLink to="" className="_navbar-item-link">Tin Tức</NavLink>
                    </li>
                    <li className="navbar-item">
                        <NavLink to="" className="navbar-item-link">Bản Đồ</NavLink>
                    </li>
                    <li className="navbar-item">
                        <NavLink to="" className="navbar-item-link">Liên hệ</NavLink>
                    </li>
                </ul>

                <ul className="navbar-list">
                    <li className="navbar-item">
                        <NavLink to="" className="navbar-item-link">Đăng Ký</NavLink>
                    </li>
                    <li className="navbar-item">
                        <NavLink to="" className="navbar-item-link">Đăng nhập</NavLink>
                    </li>
                </ul>

           </nav>
       </header>
    )
}
export default Header;