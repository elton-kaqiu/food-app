import {Header} from "./components/Header.jsx";
import {Meals} from "./components/meals/Meals.jsx";
import {CartContextProvider} from "./services/store/CartContext.jsx";
import {UserProgressContextProvider} from "./services/store/UserProgressContext.jsx";
import {Cart} from "./components/carts/Cart.jsx";
import {Checkout} from "./components/Checkout.jsx";

function App() {
    return (
        <UserProgressContextProvider>
            <CartContextProvider>
                <Header/>
                <Meals/>
                <Cart/>
                <Checkout/>
            </CartContextProvider>
        </UserProgressContextProvider>
    );
}

export default App;
