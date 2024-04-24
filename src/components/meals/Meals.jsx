import {useEffect, useState} from "react";
import {MealItem} from "./MealItem.jsx";

export const Meals = () => {
    const [loadedMeals, setLoadedMeals] = useState([])

    useEffect(() => {
        const fetchMeals = async () => {
            const response = await fetch('http://localhost:3000/meals')
            if (!response.ok) {
                //TODO
            }
            const meals = await response.json()
            setLoadedMeals(meals)
        }
        fetchMeals()
    }, []);

    return (
        <ul id='meals'>
            {loadedMeals.map(meal => (
                    <MealItem key={meal.id} meal={meal}/>
                )
            )}
        </ul>
    )
}