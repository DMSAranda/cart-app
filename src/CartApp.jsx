import { useItemsCart } from "./hooks/useItemsCart"
import { Navbar } from "./components/Navbar"
import { CartRoutes } from "./routes/CartRoutes"

export const CartApp = () => {
  
    const { cartItems, handlerAddProductCart, handlerDeleteProductCart } = useItemsCart()

    return(
        <>
            <Navbar/>
            <div className="container my-4">
                <h1>Shop</h1>
                <CartRoutes 
                    cartItems={cartItems}
                    handlerAddProductCart={handlerAddProductCart}
                    handlerDeleteProductCart={handlerDeleteProductCart}
                />
            </div>
        </>
    )
}