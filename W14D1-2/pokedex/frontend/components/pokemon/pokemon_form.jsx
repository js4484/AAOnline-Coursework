import React from 'react';
import { createPokemon } from '../../util/api_util';

class PokeForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            image_url: "",
            poke_type: "",
            attack: "",
            defense: ""
        };

        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(property) {
      return e => this.setState({ [property]: e.target.value });
    }
    
    handleSubmit (e) {
        e.preventDefault();
        createNewPokemon(this.state);
    }
    // ...
    render() {
      return (
      <form>
        <label htmlFor="name">Name
          <input type="text" value={this.state.name}/>
        </label>
          <label htmlFor="image-url">Image Url
            <input type="text" value={this.state.image_url}/>
          </label>
          <label htmlFor="poke-type">Poke Type
          <select name="poke-type" id="poke-type">
            <option value="bug">Bug</option>
            <option value="dragon">Dragon</option>
            <option value="electric">Electric</option>
            <option value="fighting">Fighting</option>
            <option value="fire">Fire</option>
            <option value="flying">Flying</option>
            <option value="ghost">Bug</option>
            <option value="grass">Dragon</option>
            <option value="ground">Ground</option>
            <option value="ice">Ice</option>
            <option value="normal">Normal</option>
            <option value="poison">Poison</option>
            <option value="psychic">Psychic</option>
            <option value="rock">Rock</option>
            <option value="steel">Steel</option>
            <option value="water">Water</option>
          </select>
        </label>
          <label htmlFor="attack">Attack
            <input type="text" value={this.state.attack} />
          </label>
          <label htmlFor="">Defense
            <input type="text" value={this.state.defense} />
          </label>
          <button onSubmit={this.handleSubmit}>Create New Pokemon!</button>
      </form>
    )
    }
}

export default PokeForm;