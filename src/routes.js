import React from "react"
import HomePage from "./pages/HomePage/HomePage"
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage"
import ProductListPage from "./pages/ProductListPage/ProductListPage"
import ProductActionsPage from "./pages/ProductActionsPage/ProductActionsPage"


const routes = [
    {
        path: "/",
        exact: true,
        main:() => <HomePage />
    },
    {
        path: "/products",
        exact:true,
        main:() => <ProductListPage />
    },
    {
        path: "/products/add",
        exact:false,
        main:({history}) => <ProductActionsPage history={history}/>
    },
    {
        path: "/products/:id/edit",
        exact:false,
        main:({history}) => <ProductActionsPage history={history}/>
    },
    {
        path: "*",
        exact: false,
        main:() => <NotFoundPage />
    }
]

export default routes;