import  * as types from "../constanst/index"
const initialState = []
const products = (state = initialState, actions)=>{
    var product,index;
    switch (actions.type) {
        case types.FETCH_PRODUCTS:
            return [...actions.products]
        case types.DELETE_PRODUCT:
            product = state.find(product=>product.id === actions.id)
            index = state.indexOf(product)
            state.splice(index, 1)
            return [...state]
        case types.ADD_PRODUCT:
            return [...state,actions.product]
        case types.EDIT_PRODUCT:
            const id = actions.product.id
            product = state.find(item => item.id === id)
            index = state.indexOf(product)
            return [...state.slice(0,index),
                    actions.product,
                    ...state.slice(index + 1),
                ]
        default: 
            return [...state]
    }
}
export default products;