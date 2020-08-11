// Autocomplete
// https://www.youtube.com/watch?v=vXO5JMiKtM8
// https://github.com/Bigless27/react-autocompelte
import React, { useEffect, useState, useRef } from "react";
import classes from "./style.module.css";

function TestingCode() {
  const [display, setDisplay] = useState(false);
  const [options, setOptions] = useState([]);
  const [search, setSearch] = useState("");
  const wrapperRef = useRef(null);

  useEffect(() => {
    const pokemon = [];
    const promises = new Array(20)
      .fill()
      .map((v, i) => fetch(`https://pokeapi.co/api/v2/pokemon-form/${i + 1}`));
    Promise.all(promises).then((pokemonArr) => {
      return pokemonArr.map((value) =>
        value
          .json()
          .then(({ name, sprites: { front_default: sprite } }) =>
            pokemon.push({ name, sprite })
          )
      );
    });
    setOptions(pokemon);
  }, []);

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const handleClickOutside = (event) => {
    const { current: wrap } = wrapperRef;
    if (wrap && !wrap.contains(event.target)) {
      setDisplay(false);
    }
  };

  const updatePokeDex = (poke) => {
    setSearch(poke);
    setDisplay(false);
  };

  return (
    <div ref={wrapperRef} className={classes.Container}>
      <br />
      <br />
      <h1>TESTING CODE</h1>
      <br />
      <br />
      <input
        className={classes.FormStyleInput}
        id="auto"
        onClick={() => setDisplay(!display)}
        placeholder="Type to search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      {display && (
        <div className={classes.autoContainer}>
          {options
            .filter(({ name }) => name.indexOf(search.toLowerCase()) > -1)
            .map((value, i) => {
              return (
                <div
                  className={classes.option}
                  onClick={() => updatePokeDex(value.name)}
                  key={i}
                  tabIndex="0"
                >
                  <span>{value.name}</span>
                  {/* <img src={value.sprite} alt="pokemon" /> */}
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
}
export default TestingCode;
