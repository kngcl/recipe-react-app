/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* import Button from '../Button'; */
import './Recipe.css';
import { useContext } from 'react';
import QuizContext from '../../Context/Context';

export default function Recipe({ setModal }) {
  const { /* items */ setItems } = useContext(QuizContext);
  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const values = Object.fromEntries(data.entries());
    const newUser = { id: Date.now(), ...values };
    setItems((prev) => [...prev, newUser]);
    setModal(false);
  };

  return (
    <form className="backshadow" onSubmit={handleSubmit}>
      <div className="custom_modal">
        <div className="delete_icon" onClick={() => setModal(false)}>
          x
        </div>
        <div className="recipe_container">
          <h1>Add new Recipe &#128523;</h1>
          <div>
            <label htmlFor="">Food name</label>
            <input type="text" name="Food" placeholder="Enter Your Meal Name" />
          </div>
          <div>
            <label htmlFor="">Food Image URL</label>
            <input
              type="text"
              name="FoodImage"
              placeholder="Enter Your Meal Name"
            />
          </div>

          <div>
            <label htmlFor="">Ingredients</label>
            <textarea rows="" cols="" name="Ingredients" />
          </div>

          <div>
            <label htmlFor="">Cooking Direction</label>
            <textarea rows="" cols="" name="CookingDirection" />
          </div>
          <div className="button_container_recipe">
            <button type="submit" className="Recipe_btn">
              Add Recipe
            </button>
            <button
              type="submit"
              className="Recipe_btn_cancel"
              onClick={() => setModal(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
