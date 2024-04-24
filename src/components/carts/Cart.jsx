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

    function handleCloseCart() {
        userProgressCtx.hideCart()
    }

    return (
        <Modal className='cart' open={userProgressCtx.progress === CART}>
            <h2>Your Cart</h2>
            <ul>
                {cartCtx.items.map(item => (
                    <CartItem key={item.id}
                              name={item.name}
                              quantity={item.quantity}
                              price={item.price}/>
                ))}
            </ul>
            <p className='cart-total'>{currencyFormatter.format(cartTotal)}</p>
            <p className='modal-actions'>
                <Button textOnly onClick={handleCloseCart}>Close</Button>
                <Button onClick={handleCloseCart}>Go to Checkout</Button>
            </p>
        </Modal>)
}