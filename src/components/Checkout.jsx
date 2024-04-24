import {Modal} from "./ui/Modal.jsx";
import {useContext} from "react";
import cartContext from "../services/store/CartContext.jsx";
import {currencyFormatter} from "../utils/formatting.js";
import {Input} from "./ui/Input.jsx";
import {Button} from "./ui/Button.jsx";
import userProgressContext from "../services/store/UserProgressContext.jsx";
import {CHECKOUT} from "../services/store/types.js";

export const Checkout = () => {
    const cartCtx = useContext(cartContext)
    const userProgressCtx = useContext(userProgressContext)
    const cartTotal = cartCtx.items.reduce((totalPrice, item) => totalPrice + (item.quantity * item.price), 0)

    function handleClose() {
        userProgressCtx.hideCheckout()
    }

    return (
        <Modal open={userProgressCtx.progress === CHECKOUT} onClose={handleClose}>
            <form>
                <h2>Checkout</h2>
                <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>
                <Input label='Full Name' type='text' id='full-name'/>
                <Input label='E-Mail Address' type='email' id='email'/>
                <Input label='Street Address' type='text' id='street'/>
                <div className='control-row'>
                    <Input label='Postal Code' type='text' id='postal-code'/>
                    <Input label='City' type='text' id='city'/>
                </div>
                <p className='modal-actions'>
                    <Button onClick={handleClose} type='button' textOnly>Close</Button>
                    <Button>Submit</Button>
                </p>
            </form>
        </Modal>
    )


}