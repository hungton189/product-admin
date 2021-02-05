import {useParams} from "react-router-dom"
import {useState,useEffect} from "react"
import {useDispatch,useSelector} from "react-redux"
import * as actions from "../../actions/ActionTypes"
function ProductForm({history}) {
    const dispatch = useDispatch();
    const productEditing = useSelector(state=>state.productEditing)
    const [inputProduct,setInputProduct] = useState({});
    const {id} = useParams()
    useEffect(() => {
        setInputProduct(productEditing);
    },[productEditing])
    const onChange = event => {
        const {name,value} = event.target;
        if(name === "name"){
            setInputProduct({...inputProduct,name:value});
        } else if(name === "price"){
            setInputProduct({...inputProduct,price:parseInt(value)});
        } else if(name === "status"){
            setInputProduct({...inputProduct,status:event.target.checked});
        }
    }
    const onSave = ()=>{
        if(!id){
            dispatch(actions.addProductRequest(inputProduct));
        }else {
            dispatch(actions.editProductRequest(inputProduct)); 
        }
        history.goBack();
        dispatch(actions.getProductEditing({}));
    }
	return (
    <div className="row">
        <div className="col-xs-6 col-sm-6 col-xs-6 col-md-6 col-lg-6 col-xl-6">
            <div className="form-group">
              <label >Tên Sản Phẩm:</label>
              <input 
                type="text"
                name="name" 
                className="form-control"
                value={inputProduct.name}
                onChange={onChange} 
            />
            </div>
            <div className="form-group">
                <label >Giá:</label>
                <input 
                    type="number" 
                    name="price"
                    className="form-control" 
                    value={inputProduct.price}
                    onChange={onChange}
                />
            </div>
            <label >Tình trạng:</label>
            <div className="form-check">
                <label className="form-check-label">
                    <input 
                        type="checkbox"
                        name="status" 
                        className="form-check-input" 
                        checked={inputProduct.status}
                        onChange={onChange}
                    />
                    Còn hàng
                </label>
            </div>
            <button className="btn btn-primary mt-20" onClick={onSave}>Lưu lại</button>
        </div>
    </div>
	);
}
export default ProductForm;
