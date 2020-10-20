import React, { Component } from 'react';
import { getOneCharacter } from '../../services/hey-arnold-api';
import PropTypes from 'prop-types';

export default class CharacterDetails extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string.isRequired
      })
    })
  };
  
  state = {
    character: ''
  }

  componentDidMount = async() => {
    const characterId = this.props.match.params.id;
    await getOneCharacter(characterId)
      .then(character => this.setState({ character }));
  }

  render() {
    const { character } = this.state;
    return (
      <div>
        <h1> {character.name} </h1>
        <img src={character.image} />
      </div>
    );
  }
}
