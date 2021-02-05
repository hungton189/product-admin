import {useParams} from "react-router-dom"
import {useEffect} from "react"
import {useDispatch} from "react-redux"
import * as actions from "../../actions/ActionTypes"
import ProductForm from "../../components/ProductForm/ProductForm"
function ProductActionsPage({history}) {
    const dispatch = useDispatch();
    const {id} = useParams()
    useEffect(() => {
        dispatch(actions.getProductEditingRequest(id));
    },[])
	return (
        <div>
            <ProductForm history={history}/>
        </div>
	);
}
export default ProductActionsPage;
