import React, { useState } from "react";
import Card from "./card";
import { searchPokemon } from "../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import "./pokemon.css";

function Pokemon() {
  const [pokemon, setPokemon] = useState("");

  const reduxState = useSelector((state) => state.pokemon);
  const isLoading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setPokemon(e.target.value);
  };

  const getPokemon = () => {
    dispatch(searchPokemon(pokemon));
  };

  return (
    <div className="body">
      <h1 className="hero_title">Pokedex App</h1>
      <div>
        <img src="./img/pokelogo.png" alt="" id="logo" />
      </div>
      <div className="container">
        <br />
        <label className="inputlabel">
          <strong>Insert Pokemon name here:</strong>
        </label>
        <input
          type="text"
          onChange={handleChange}
          className="searchinput"
          placeholder="pokemon name"
        />
        <br />
        <button
          className="btn btn-warning d-flex justify-content-center"
          onClick={getPokemon}
        >
          Get pokemon
        </button>
        <br />
        <div className="container d-flex justify-content-center">
          <div className="row">
            <h4 className="card_title">Pokemon:</h4>
            <div>
              <Card
                id={reduxState.id}
                name={reduxState.name}
                height={reduxState.height}
              />
              {isLoading && "Searching Pokemon"}
              {/*error === null &&
              alert("This pokemon does not exist. Please try another name")*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pokemon;
