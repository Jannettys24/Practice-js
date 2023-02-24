import React from "react";






function recipecard({recipe}) {
    const {idMeal, strMeal, strCategory, strMealThumb } = recipe;
    return (
        <div className="card">
        <img
        src={strMealThumb}
        alt={strMeal}
        className="card-Image"
        />
    <div className="card-body"> 
    <span className="category">{strCategory}</span>
    <h3>strMeal</h3>
    <a href={"https://www.themealdb.com/meal/" + idMeal}   target="_blank">ingredients</a>
    </div>
    </div>
    )
}

export default recipecard









// onst Recipecard = ({recipe}) => {
//     const {idMeal, strMeal, strCategory, strMealThumb } = recipe;
//     return (
//         <div className="card">
//         <img
//         src={strMealThumb}
//         alt={strMeal}
//         className="card-Image"
//         />
//     <div className="card-body"> 
//     <span className="category">{strCategory}</span>
//     <h3>strMeal</h3>
//     <a href={"https://www.themealdb.com/meal/" + idMeal}   target="_blank">ingredients</a>
//     </div>
//     </div>
//     )c
// };
// export default Recipecard;

