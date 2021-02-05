import  * as types from "../constanst/index"
const initialState = []
const products = (state = initialState, actions)=>{
    switch (actions.type) {
        case types.FETCH_PRODUCTS:
            return [...actions.products]
        default: 
            return [...state]
    }
}
export default products;