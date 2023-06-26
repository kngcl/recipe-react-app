/* eslint-disable no-unused-vars */
/* eslint-disable no-return-assign */
/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/button-has-type */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import Button from '../../Component/Button';
import Recipe from '../../Component/RecipeModal/Recipe';
/* import Update from '../../Component/Update/Update'; */
import QuizContext from '../../Context/Context';
import './Home.css';

const itemsForm = () => {
  const dats = localStorage.getItem('item');
  if (dats) {
    return JSON.parse(dats);
  }
  return [];
};

export default function Home() {
  const [items, setItems] = useState(itemsForm());
  const [tool, setTool] = useState();
  useEffect(() => {
    localStorage.setItem('item', JSON.stringify(items));
  });
  const [modal, setModal] = useState(false);

  function handleSort(id) {
    const fillter = items.filter((elements, index) => {
      return elements.id !== id;
    });

    setItems(fillter);
  }

  return (
    <QuizContext.Provider value={{ items, setItems }}>
      <div>
        {modal === true && <Recipe setModal={setModal} />}
        {/*         {modal === true && <Update setModal={setModal} />} */}
        <div className="header">
          <p className="FoodApp">Food Recipe</p>
          <div className="search_container">
            <input type="search" name="" placeholder="Search Your Recipe" />
            <button type="submit" className="search_button">
              Search
            </button>
          </div>
          <div>
            <Button title="Add Recipe +" setModal={setModal} />
          </div>
        </div>
        <div className="recipe_container1">
          <div className="result_recipe recipe_result">
            {items.map((item, i) => (
              <div className="display_recipe recipe_individual" key={i}>
                <div className="picture">
                  <img src={item.FoodImage} alt="elt" className="food_child" />
                </div>
                <div className="icons_favorite_and_title">
                  <p className="food_name">{item.Food}</p>
                  <p
                    className="icons_favorite"
                    onClick={() => handleSort(item.id)}
                  >
                    {' '}
                    &#9733;
                  </p>
                </div>

                {tool && (
                  <div className="icons">
                    <div>
                      <Button
                        title="edit"
                        setModal={setModal}
                        width1="0.4rem"
                      />
                    </div>

                    <p className="icon_view">view</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </QuizContext.Provider>
  );
}
