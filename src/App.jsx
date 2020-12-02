import './App.css';
import Container from '@material-ui/core/Container'
import {Route} from 'react-router-dom'

//Views
import HomeView from './views/HomeView';

function App() {
  return (
    <Container>
      <Route exact path="/" render={_ => <HomeView/>}/>
    </Container>
  );
}

export default App;
