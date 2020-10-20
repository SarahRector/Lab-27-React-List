import React, { Component } from 'react';
import { getCharacters } from '../../services/hey-arnold-api';


export default class CharacterList extends Component {
  state = {
    characters: [],
  }

  handleSubmit = async event => {
    event.preventDefault();

    const characters = await getCharacters();
    this.setState({
      characters
    });

  }
  render() {
    const { characters } = this.state;
    const eachCharacter = characters.map(character => (
      <li key={character._id}>
        <a href={character}>{character.name}</a>
      </li>
    ));

    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <button>Get Characters!</button>
        </form>
        <ul>
          {eachCharacter}
        </ul>
      </>
    );
  }
}
