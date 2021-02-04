import ProductList from "../../components/ProductList/ProductList"
function ProductListPage() {
	return (
    <div className="row">
        <div className="col-xs-12 col-sm-12 col-xs-12 col-md-12 col-lg-12 col-xl-12">
            <button type="button" className="btn btn-primary">
                <i className="fas fa-plus mr-6"></i>
                Thêm sản phẩm
            </button>
            <ProductList />
        </div>
    </div>
	);
}

export default ProductListPage;
