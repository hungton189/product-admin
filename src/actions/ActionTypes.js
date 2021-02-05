import * as types from "../constanst/index"
import callApi from "../utils/apiCaller"

export const fetchProducts = (products)=>{
    return {
        type: types.FETCH_PRODUCTS,
        products
    }
}

export const fetchProductsRequest = ()=>{
    return (dispatch)=>{
        return callApi("products")
        .then(res=>{
            dispatch(fetchProducts(res.data))
        })
        .catch(err=>{
            dispatch(fetchProducts([]))
            console.error(err)
        })
    }
}