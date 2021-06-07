import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

const MealFinder = () => {
    const [search, setSearch] = useState('')
    const [meal, setMeal] = useState([])
    const handleOnChange = (event) => {
        const newChange = (event.target.value)
        setSearch(newChange);
    }
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
            .then(res => res.json())
            .then(data => setMeal(data.meals))
    }, [search])
    return (
        <div className="mealFinder">
            <h1>find your favorite meal</h1>
            <input type="text" placeholder="search meal" onChange={handleOnChange} />
            <p>your meal: {search}</p>
            <p>total meal length : {meal?.length || 0}</p>
            <div className="display">
                {
                    meal?.map(meals => <MealDetails meals={meals}></MealDetails>)
                }
            </div>
        </div>
    );
};

const MealDetails = (props) => {
    const { strMeal, strCategory, strArea, strMealThumb, idMeal } = props.meals
    let history = useHistory()
    const handleDetailBtn = (idPara) => {
        history.push(`/detailInfo/${idPara}`)
    }
    return (
        <div className="innerDetail">
            <img src={strMealThumb} alt="" />
            <h3>{strMeal}</h3>
            <p>meal category: {strCategory}</p>
            <p>meal area: {strArea}</p>
            <button className='main-btn' onClick={() => handleDetailBtn(idMeal)}>view detail</button>
        </div>
    )
}

export default MealFinder;