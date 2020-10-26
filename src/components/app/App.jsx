import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import CharacterList from '../character-list/CharacterList';
import CharacterDetails from '../character-details/CharacterDetails';

export default function App() {
  return <Router>
    <Switch>
      <Route
        path="/"
        exact
        render={(routerProps) => <CharacterList {...routerProps} />}
      />
      <Route
        path="/:id"
        exact
        render={(routerProps) => <CharacterDetails {...routerProps} />}
      />
    </Switch>
  </Router>;
}
