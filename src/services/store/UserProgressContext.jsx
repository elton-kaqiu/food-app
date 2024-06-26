import {createContext, useState} from "react";
import {CART, CHECKOUT} from "./types.js";

const UserProgressContext = createContext({
    progress: '',
    showCart: () => {
    },
    hideCart: () => {
    },
    showCheckout: () => {
    },
    hideCheckout: () => {
    },
})


export function UserProgressContextProvider({children}) {
    const [userProgress, setUserProgress] = useState('')

    function showCart() {
        setUserProgress(CART)
    }

    function hideCart() {
        setUserProgress('')
    }

    function showCheckout() {
        setUserProgress(CHECKOUT)
    }

    function hideCheckout() {
        setUserProgress('')
    }

    const userProgressCtx = {
        progress: userProgress,
        showCart,
        hideCart,
        showCheckout,
        hideCheckout
    }

    return <UserProgressContext.Provider value={userProgressCtx}>{children}</UserProgressContext.Provider>
}

export default UserProgressContext