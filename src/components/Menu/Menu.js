import {NavLink} from "react-router-dom"
function Menu() {
	return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <NavLink className="navbar-brand" to="/">Product Admin</NavLink>
        <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item">
                    <NavLink to="/" className="nav-link">Trang chủ</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/products" className="nav-link">Quản lý sản phẩm</NavLink>
                </li>
            </ul>
        </div>
    </nav>
	);
}

export default Menu;
