import React, { useState, useEffect } from 'react';

// Define API Fetching Function
const fetchMealIdeas = async (ingredient) => {
const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
const data = await response.json();
return data.meals;
};

const fetchMealDetails = async (idMeal) => {
const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
const data = await response.json();
return data.meals[0];
};

const MealIdeas = ({ ingredient }) => {
  // Define State Variables
const [meals, setMeals] = useState([]);

  // Define Load Function
const loadMealIdeas = async () => {
    const mealIdeas = await fetchMealIdeas(ingredient);
    const mealsWithDetails = await Promise.all(mealIdeas.map(async (meal) => {
    const details = await fetchMealDetails(meal.idMeal);
    return { ...meal, details };
    }));
    setMeals(mealsWithDetails);
};

  // Use the useEffect Hook
useEffect(() => {
    loadMealIdeas();
}, [ingredient]);

  // Render the Component
return (
    <div>
    <h2><strong>Meal Ideas for {ingredient}</strong></h2>
    <ul>
        {meals.map((meal) => (
        <li key={meal.idMeal}>
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            <p><strong>{meal.strMeal}</strong></p>
            <ul>
            {Object.keys(meal.details).filter(key => key.startsWith('strIngredient') && meal.details[key]).map((key, index) => (
                <li key={index}>{meal.details[key]}</li>
            ))}
            </ul>
        </li>
        ))}
    </ul>
    </div>
);
};

export default MealIdeas;
