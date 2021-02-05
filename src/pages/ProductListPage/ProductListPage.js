import ProductList from "../../components/ProductList/ProductList"
import {Link} from "react-router-dom"
function ProductListPage() {
	return (
    <div className="row">
        <div className="col-xs-12 col-sm-12 col-xs-12 col-md-12 col-lg-12 col-xl-12">
            <Link className="btn btn-primary" to="/products/add">
                <i className="fas fa-plus mr-6" ></i>
                Thêm sản phẩm
            </Link>
            <ProductList />
        </div>
    </div>
	);
}

export default ProductListPage;
