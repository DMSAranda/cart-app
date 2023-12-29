import { Navigate, Route, Routes } from "react-router-dom"
import { CatalogView } from "../components/CatalogView"
import { CartView } from "../components/CartView"

export const CartRoutes = ({handlerAddProductCart, handlerDeleteProductCart, cartItems}) => {

    return (
        <Routes>
            <Route path="catalog"
                element={<CatalogView handler={handlerAddProductCart} />}
            />
            <Route path="cart"
                element={(cartItems?.length <= 0 ?
                    <div className="alert alert-warning">
                        Cart is empty
                    </div>
                    :
                    <div className="my-4 w-80">
                        <CartView items={cartItems}
                            handlerDelete={handlerDeleteProductCart}
                        />
                    </div>
                )}
            />
            <Route path="/"
                element={<Navigate to={'/catalog'} />}
            />
        </Routes>
    )
}