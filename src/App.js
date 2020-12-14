import { BrowserRouter, Route, Switch } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import axios from 'axios'

import './App.css';

import Starship from './components/Starship';
import StarshipResults from './components/StarshipResults'

function App() {
const [starship, setStarship] = useState([])

  const grabStarship = () => {
      let url = 'https://swapi.dev/api/starships/'
      axios.get(url).then(result => {
          console.log('hi');
          console.log(result.data);
          setStarship(result.data.results)
      }).catch(err => {
          console.log(err);
      }) 
  }

  useEffect(() => {
    grabStarship();
  }, [])

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path='/' exact render={() => <Starship starships={starship}/> } />
          <Route path='/starship' exact component={StarshipResults} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
