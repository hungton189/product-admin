import "./ProductItem.css";
import {Link} from "react-router-dom"
import {useDispatch} from "react-redux"
import * as actions from "../../actions/ActionTypes"

function ProductItem({product,index}) {
    const dispatch = useDispatch()
    const onDeleteProduct = id => {
        dispatch(actions.deleteProductRequest(id))
    }
	return (
    <tr>
        <td>{index+1}</td>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.price}$</td>
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
            <button  class="btn btn-danger"
                onClick={()=>onDeleteProduct(product.id)}
            >
                <i className="fas fa-trash mr-6"></i>
                Xóa
            </button>
        </td>
    </tr>
	);
}

export default ProductItem;
