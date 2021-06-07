import React, { useEffect, useState } from 'react';

const MealDetail = () => {
    const [mealDetail, setMealDetail] = useState({})
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=52773')
        .then(res => res.json())
        .then(data => setMealDetail(data?.meals?.[0]))
    }, [])
    return (
        <div className="mealDetail">
            <h1>the meal detail</h1>
            <h3>meal category: {mealDetail?.strCategory || "data not found"}</h3>
            <h3>meal name: {mealDetail?.strMeal || "data not found"}</h3>
        </div>
    );
};

export default MealDetail;