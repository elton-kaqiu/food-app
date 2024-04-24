import {Header} from "./components/Header.jsx";
import {Meals} from "./components/meals/Meals.jsx";
import {CartContextProvider} from "./services/store/CartContext.jsx";
import {UserProgressContextProvider} from "./services/store/UserProgressContext.jsx";
import {Cart} from "./components/carts/Cart.jsx";

function App() {
    return (
        <UserProgressContextProvider>
            <CartContextProvider>
                <Header/>
                <Meals/>
                <Cart/>
            </CartContextProvider>
        </UserProgressContextProvider>
    );
}

export default App;
