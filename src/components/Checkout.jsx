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

    function handleSubmit(event) {
        event.preventDefault()
        const fd = new FormData()
        const formData = new FormData(event.target);
        const customerData = {
            email: formData.get('email'),
            name: formData.get('name'),
            street: formData.get('street'),
            'postal-code': formData.get('postal-code'),
            city: formData.get('city')
        };

        fetch('http://localhost:3000/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                order: {
                    items: cartCtx.items,
                    customer: customerData
                }
            })
        }).then(response => {
            if (!response.ok) {
                throw new Error('Failed to submit order');
            }
            return response.json();
        }).then(data => {
            console.log(data); // Just for debugging
            // Optionally, you can handle the response here
            // For example, show a success message or update UI
        }).catch(error => {
            console.error('Error submitting order:', error);
            // Handle errors, maybe show an error message to the user
        });
    }

    return (
        <Modal open={userProgressCtx.progress === CHECKOUT}
               onClose={handleClose}>
            <form onSubmit={handleSubmit}>
                <h2>Checkout</h2>
                <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>
                <Input label='Full Name' type='text' id='name'/>
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