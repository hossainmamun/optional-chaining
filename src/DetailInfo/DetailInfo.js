import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const DetailInfo = () => {
    const { mealId } = useParams()
    const [mealInfo, setMealInfo] = useState({})
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
        .then(res => res.json())
        .then(data => setMealInfo(data.meals[0]))
    }, [])
    const {strMealThumb,strMeal,strCategory,strArea, strInstructions, strTags} = mealInfo
    return (
        <div style={{textAlign: "center", marginTop: "100px", textTransform: "capitalize"}}>
            <h1>meal id : {mealId}</h1>
            <img style={{width: "500px", height: "300px"}} src={strMealThumb} alt="" />
            <h3>meal name: {strMeal}</h3>
            <p>category: {strCategory}</p>
            <p>area: {strArea}</p>
            <p>{strTags}</p>
            <p>{strInstructions}</p>
        </div>
    );
};

export default DetailInfo;