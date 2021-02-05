import ProductItem from "../ProductsItem/ProductItem"
import "./ProductList.css"
import {useEffect} from "react"
import * as actions from "../../actions/ActionTypes"
import {useSelector,useDispatch} from "react-redux"

function ProductList() {
    const products = useSelector(state=>state.products);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(actions.fetchProductsRequest())
    },[])
    const productElm = products.map((product,index)=>{
        return (
            <ProductItem
            key={product.id}
            index={index}
            product={product} 
            />
        )
    })
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
                {productElm}
            </tbody>
        </table>
    </div>
	);
}


export default ProductList;
