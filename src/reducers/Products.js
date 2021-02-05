import  * as types from "../constanst/index"
const initialState = []
const products = (state = initialState, actions)=>{
    switch (actions.type) {
        case types.FETCH_PRODUCTS:
            return [...actions.products]
        case types.DELETE_PRODUCT:
            const product = state.find(product=>product.id === actions.id)
            const index = state.indexOf(product)
            state.splice(index, 1)
            return [...state]
        default: 
            return [...state]
    }
}
export default products;