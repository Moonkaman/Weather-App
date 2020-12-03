import {React, useState, useEffect} from 'react'
import './App.css';
import Container from '@material-ui/core/Container'
import {Route} from 'react-router-dom'

import fakedata from './fakedata';

//Views
import HomeView from './views/HomeView';

function App() {
  const [weatherData, setWeatherData] = useState(fakedata)

  return (
    <Container>
      <Route exact path="/" render={_ => <HomeView weatherData={weatherData}/>}/>
    </Container>
  );
}

export default App;
