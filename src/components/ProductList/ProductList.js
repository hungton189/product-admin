import ProductItem from "../ProductsItem/ProductItem"
import "./ProductList.css" 
function ProductList() {
	return (
    <div className="product-list">
        <h4 className="title-product-list">Danh sách sản phẩm</h4>
        <table className="table" border="1">
            <thead style={{textAlign: 'center'}}>
                <tr>
                    <th>STT</th>
                    <th>Mã SP</th>
                    <th>Tên</th>
                    <th>Giá</th>
                    <th>Trạng thái</th>
                    <th>Hành động</th>
                </tr>
            </thead>
            <tbody>
                <ProductItem />
                <ProductItem />
            </tbody>
        </table>
    </div>
	);
}

export default ProductList;
