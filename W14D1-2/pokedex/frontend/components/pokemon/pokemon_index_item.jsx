import React from 'react';
import { Link } from "react-router-dom";

const PokemonIndexItem = (props) => {
    return (<Link to={`/pokemon/${props.pokemon.id}`}><p key="1">{props.pokemon.name}</p> <img key="2"src={props.pokemon.image_url} height="30px" width="30px"></img> </Link>)
}

export default PokemonIndexItem;