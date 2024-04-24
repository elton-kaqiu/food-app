import {currencyFormatter} from "../../utils/formatting.js";
import {Button} from "../ui/Button.jsx";
import {useContext} from "react";
import CartContext from "../../services/store/CartContext.jsx";

export const MealItem = ({meal}) => {
    const imagePath = `http://localhost:3000/${meal.image}`
    const currencyInDollar = currencyFormatter.format(meal.price)
    const cartCtx = useContext(CartContext)

    function handleMealToCart() {
        cartCtx.addItem(meal)
    }

    return (

        <li className='meal-item'>
            <article>
                <img src={imagePath} alt={meal.name}/>
                <div>
                    <h3>{meal.name}</h3>
                    <p className='meal-item-price'>{currencyInDollar}</p>
                    <p className='meal-item-description'>{meal.description}</p>
                </div>
                <p className='meal-item-actions'>
                    <Button onClick={handleMealToCart}>Add to Cart</Button>
                </p>
            </article>
        </li>
    )
}