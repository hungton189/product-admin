import * as types from "../constanst/index"
const initialState = {}

const productEditing = (state= initialState, actions)=>{
    switch(actions.type){
        case types.GET_PRODUCT_EDITING:
            return {...actions.product}
        default:
            return {...state}
    }
}

export default productEditing;