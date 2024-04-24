import {Modal} from "../ui/Modal.jsx";
import {useContext} from "react";
import CartContext from "../../services/store/CartContext.jsx";
import {currencyFormatter} from "../../utils/formatting.js";
import {Button} from "../ui/Button.jsx";
import UserProgressContext from "../../services/store/UserProgressContext.jsx";
import {CART} from "../../services/store/types.js";
import {CartItem} from "./CartItem.jsx";

export const Cart = () => {
    const cartCtx = useContext(CartContext)
    const userProgressCtx = useContext(UserProgressContext)
    const cartTotal = cartCtx.items.reduce((totalPrice, item) => totalPrice + (item.quantity * item.price)
        , 0)
    const isCartOpen = userProgressCtx.progress === CART

    function handleCloseCart() {
        userProgressCtx.hideCart()
    }

    function handleGoToCheckout() {
        userProgressCtx.showCheckout()
    }

    return (
        <Modal className='cart' open={isCartOpen}
               onClose={isCartOpen && handleCloseCart}>
            <h2>Your Cart</h2>
            <ul>
                {cartCtx.items.map(item => (
                    <CartItem key={item.id}
                              name={item.name}
                              quantity={item.quantity}
                              price={item.price}
                              onIncrease={() => cartCtx.addItem(item)}
                              onDecrease={() => cartCtx.removeItem(item.id)}/>
                ))}
            </ul>
            <p className='cart-total'>{currencyFormatter.format(cartTotal)}</p>
            <p className='modal-actions'>
                <Button textOnly onClick={handleCloseCart}>Close</Button>
                {cartCtx.items.length > 0 && (<Button onClick={handleGoToCheckout}>Go to Checkout</Button>)}
            </p>
        </Modal>)
}