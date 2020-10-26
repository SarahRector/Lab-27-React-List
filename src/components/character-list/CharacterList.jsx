import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
      <Link key={character._id} to={`/${character._id}`}>
        <li key={character._id}>
          <p href={character}>{character.name}</p>
        </li>
      </Link>
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
