/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable jsx-a11y/no-static-element-interactions */
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
import Update from '../../Component/Update/Update';

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
  const [edit, setEdit] = useState('');
  const [favorite, setFavorite] = useState('no');
  const [searchRecipe, setSearchRecipe] = useState('');
  const [val, setVal] = useState('');

  const searchBar = () => {
    setSearchRecipe(val);
  };
  console.log(searchRecipe);

  useEffect(() => {
    localStorage.setItem('item', JSON.stringify(items));
  });

  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);

  function handleSort(id) {
    if (window.confirm('Are you Sure you want to delete?')) {
      const fillter = items.filter((elements, index) => {
        return elements.id !== id;
      });
      setItems(fillter);
    }
  }

  const FavoriteRecipe = (id) => {
    const findOdj = items.find((obj) => {
      return obj.id === id;
    });

    if (findOdj.favorite === 'yes') {
      findOdj.favorite = 'no';
    } else {
      findOdj.favorite = 'yes';
    }

    setFavorite(findOdj.favorite);

    const filtered = items.filter((value) => {
      return value.id !== id;
    });

    const update = [...filtered, findOdj];

    localStorage.setItem('items', JSON.stringify(update));
  };

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
    setSearchRecipe('');
    setFavorite('');
  }, [items, val, favorite]);

  return (
    <QuizContext.Provider value={{ items, setItems, edit }}>
      <div>
        {modal === true && <Recipe setModal={setModal} />}
        {modal2 === true && <Update setModal={setModal2} />}
        <div className="header">
          <p className="FoodApp">Food Recipe</p>
          <div className="search_container">
            <input
              type="text"
              name=""
              placeholder="Search Your Recipe"
              onChange={(e) => setVal(e.target.value)}
              className="text"
            />
            <button type="submit" className="search_button" onClick={searchBar}>
              Search
            </button>
          </div>

          <div>
            <Button title="Add Recipe +" setModal={setModal} />
          </div>
        </div>
        <div className="recipe_container1">
          <div className="result_recipe recipe_result">
            {searchRecipe === ''
              ? items.map((item, i) => (
                  <div className="display_recipe recipe_individual" key={i}>
                    <div className="picture">
                      <img
                        src={item.FoodImage}
                        alt="elt"
                        className="food_child"
                      />
                      <div className="overlay">
                        <div className="recipeDetailContainer">
                          <div className="recipeDetail">
                            <p>Description : </p>
                            <span>{item.CookingDirection}</span>
                          </div>
                          <div className="recipeDetail">
                            <p>Ingredient : </p>
                            <span>{item.Ingredients}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="icons_favorite_and_title">
                      <div className="title_favorite">
                        <p className="food_name">{item.Food}</p>
                        <i
                          onClick={() => FavoriteRecipe(item.id)}
                          className={
                            item.favorite === 'yes'
                              ? 'red-icon fa-solid fa-heart'
                              : 'black-icon fa-regular fa-heart'
                          }
                        />
                        {/*                       {' '}
                      &#9733;
                    </p> */}
                      </div>

                      <div className="icons_views">
                        <p
                          className="delete_icons_x"
                          onClick={() => handleSort(item.id)}
                        >
                          <Button
                            title="delete"
                            width1="0.4rem"
                            color="brown"
                          />
                        </p>
                        <div className="icons">
                          <div
                            onClick={() => {
                              setEdit(item);
                            }}
                          >
                            <Button
                              title="edit"
                              setModal={setModal2}
                              width1="0.4rem"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/*  {tool && (
                  
                )} */}
                  </div>
                ))
              : items
                  .filter(
                    (search) =>
                      search.Food.toLowerCase() === searchRecipe.toLowerCase()
                  )
                  .map((item, i) => (
                    <div className="display_recipe recipe_individual" key={i}>
                      <div className="picture">
                        <img
                          src={item.FoodImage}
                          alt="elt"
                          className="food_child"
                        />
                        <div className="overlay">
                          <div className="recipeDetailContainer">
                            <div className="recipeDetail">
                              <p>Description : </p>
                              <span>{item.CookingDirection}</span>
                            </div>
                            <div className="recipeDetail">
                              <p>Ingredient : </p>
                              <span>{item.Ingredients}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="icons_favorite_and_title">
                        <div className="title_favorite">
                          <p className="food_name">{item.Food}</p>
                          <i
                            onClick={() => FavoriteRecipe(item.id)}
                            className={
                              item.favorite === 'yes'
                                ? 'red-icon fa-solid fa-heart'
                                : 'black-icon fa-regular fa-heart'
                            }
                          />
                          {/*                       {' '}
                      &#9733;
                    </p> */}
                        </div>

                        <div className="icons_views">
                          <p
                            className="delete_icons_x"
                            onClick={() => handleSort(item.id)}
                          >
                            <Button
                              title="delete"
                              width1="0.4rem"
                              color="brown"
                            />
                          </p>
                          <div className="icons">
                            <div
                              onClick={() => {
                                setEdit(item);
                              }}
                            >
                              <Button
                                title="edit"
                                setModal={setModal2}
                                width1="0.4rem"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/*  {tool && (
                  
                )} */}
                    </div>
                  ))}
          </div>
        </div>
      </div>
    </QuizContext.Provider>
  );
}
