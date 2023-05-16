import './App.css';
import "@fontsource/open-sans-condensed";
import HomePage from './pages/homepage/homepage.component';
import {Route,Switch } from 'react-router-dom';

const HatsPage = () =>{
  return(
    <div>
      <h1>HatsPage</h1>
    </div>
  )
}
function App() {
  return (
    <div>
      <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
