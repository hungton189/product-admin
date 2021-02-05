import "./ProductItem.css";
import {Link} from "react-router-dom"

function ProductItem({product,index}) {
	return (
    <tr>
        <td>{index+1}</td>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.price}đ</td>
        {
            product.status ?
            <td style={{textAlign:"center"}}>
                <span className="product-item-status ">Còn hàng</span> 
            </td> :
            <td style={{textAlign:"center"}}>
                <span className="product-item-status over">Hết hàng</span>
            </td>  
        }
        <td style={{textAlign:"center"}}>
            <Link 
                class="btn btn-warning mr-6" 
                style={{color:"aliceblue"}}
                to={`/products/${product.id}/edit`}
            >
                <i className="fas fa-pen mr-6" ></i>
                Sửa
            </Link>
            <Link  class="btn btn-danger">
                <i className="fas fa-trash mr-6"></i>
                Xóa
            </Link>
        </td>
    </tr>
	);
}

export default ProductItem;
