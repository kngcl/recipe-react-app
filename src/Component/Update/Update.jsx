/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* import Button from '../Button'; */
import './Update.css';
import { useContext, useState } from 'react';
import QuizContext from '../../Context/Context';

export default function Update({ setModal }) {
  const { items, setItems, edit } = useContext(QuizContext);
  const [favorite /* setFavorite */] = useState('no');
  console.log(edit);
  const handleSubmit = (event) => {
    event.preventDefault();

    const filtered = items.filter((value) => {
      return value.id !== edit.id;
    });

    const id = Date.now();
    const data = new FormData(event.currentTarget);
    const values = Object.fromEntries(data.entries());
    const itemValues = { ...values, id, favorite, filtered };
    const update = [itemValues, ...filtered];

    setItems(update);
    /*     const data = new FormData(event.currentTarget);
    const values = Object.fromEntries(data.entries()); */
    /*  setItems((prev) => [...prev, values]); */
    setModal(false);
  };

  return (
    <form className="backshadow" onSubmit={handleSubmit}>
      <div className="custom_modal">
        <div className="delete_icon" onClick={() => setModal(false)}>
          x
        </div>
        <div className="recipe_container">
          <h1>Edit your Recipe &#128523;</h1>
          <div>
            <label htmlFor="">Food name</label>
            <input
              type="text"
              name="Food"
              placeholder="Enter Your Meal Name"
              defaultValue={edit.Food}
            />
          </div>
          <div>
            <label htmlFor="">Food Image URL</label>
            <input
              type="text"
              name="FoodImage"
              placeholder="Enter Your Meal Name"
              defaultValue={edit.FoodImage}
            />
          </div>
          <div>
            <label htmlFor="">Ingredients</label>
            <textarea
              rows=""
              cols=""
              name="Ingredients"
              defaultValue={edit.Ingredients}
            />
          </div>
          <div>
            <label htmlFor="">Cooking Direction</label>
            <textarea
              rows=""
              cols=""
              name="CookingDirection"
              defaultValue={edit.CookingDirection}
            />
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
