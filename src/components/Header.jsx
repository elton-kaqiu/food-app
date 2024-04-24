import logo from '../assets/logo.jpg'
import {Button} from "./ui/Button.jsx";
import {useContext} from "react";
import CartContext from "../services/store/CartContext.jsx";
import UserProgressContext from "../services/store/UserProgressContext.jsx";

export const Header = () => {
    const cartCtx = useContext(CartContext)
    const userProgressCtx = useContext(UserProgressContext)
    const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
        return totalNumberOfItems + item.quantity
    }, 0)

    function handleShowCart() {
        userProgressCtx.showCart()
    }

    return (
        <header id='main-header'>
            <div id='title'>
                <img src={logo} alt='Food app logo'/>
                <h1>React - Food App</h1>
            </div>
            <nav>
                <Button textOnly onClick={handleShowCart}>Cart ({totalCartItems})</Button>
            </nav>
        </header>
    )
}