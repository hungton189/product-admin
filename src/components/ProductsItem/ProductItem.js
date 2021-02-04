import "./ProductItem.css";

function ProductItem() {
	return (
    <tr>
        <td>1</td>
        <td>1</td>
        <td>Iphone 6 plus</td>
        <td>3000000đ</td>
        <td className="status-product-item">Còn hàng</td>
        <td style={{textAlign:"center"}}>
            <button type="button" class="btn btn-warning mr-6" style={{color:"aliceblue"}}>
                <i className="fas fa-pen mr-6" ></i>
                Sửa
            </button>
            <button type="button" class="btn btn-danger">
                <i className="fas fa-trash mr-6"></i>
                Xóa
            </button>
        </td>
    </tr>
	);
}

export default ProductItem;
