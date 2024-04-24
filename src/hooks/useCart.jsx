import { useContext } from "react";
import CartContext from "../services/store/CartContext.jsx";

const useCart = () => useContext(CartContext);

export default useCart;
