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
export const addProduct = (product)=>{
    return {
        type: types.ADD_PRODUCT,
        product
    }
}
export const addProductRequest = (product)=>{
    return dispatch=>{
        callApi("products","POST",product)
        .then(response=>{
            dispatch(addProduct(response.data));
        })
    }
}
export const getProductEditing = (product)=>{
    return {
        type:types.GET_PRODUCT_EDITING,
        product:product
    }
}
export const getProductEditingRequest = (id)=>{
    return dispatch => {
        callApi(`products/${id}`, "GET")
        .then(response => {
            dispatch(getProductEditing(response.data))
        })
    }
}
export const editProduct = (product)=>{
    return {
        type:types.EDIT_PRODUCT,
        product: product
    }
}
export const editProductRequest = (product)=>{
    return dispatch=>{
        callApi(`products/${product.id}`,"PUT",product)
        .then(response=>{
            dispatch(editProduct(response.data))
        })
    }
}