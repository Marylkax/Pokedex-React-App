import React, { Component } from "react";

const Pokemon = (props) => {
  console.log(props);

  const { pokemon } = props;

  return pokemon.results.map((item) => {
    return <p> {item.name}</p>;
  });
};

export default Pokemon;
