import React from "react";
import style from "./recipe.module.css"

const Item = ({ title, image, ingredients }) => {
    return (
      <div className={style.recipe}>
          <h1>{title}</h1>
          <img className={style.image} src={image} alt="" />
          <ol>
              {ingredients.map(ingredient => (
                  <li>{ingredient.text}</li>
              ))}
          </ol>
          </div>   
    );
}; 

export default Item;