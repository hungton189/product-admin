import {combineReducers} from "redux"
import products from "./Products"
import productEditing from "./ProductEditing"

const appReducer = combineReducers({
    products,
    productEditing
})

export default appReducer;