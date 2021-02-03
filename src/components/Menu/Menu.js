function Menu() {
	return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <a className="navbar-brand" >Product Admin</a>
        <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Trang chủ</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Quản lý sản phẩm</a>
                </li>
            </ul>
        </div>
    </nav>
	);
}

export default Menu;
