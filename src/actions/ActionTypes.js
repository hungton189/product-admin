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
export const deleteProduct = (id) =>{
    return {
        type:types.DELETE_PRODUCT,
        id:id
    }
}
export const deleteProductRequest = (id)=>{
    return dispatch=>{
        callApi(`products/${id}`,"DELETE")
        .then(response=>{
            dispatch(deleteProduct(id))
        })
    }
}