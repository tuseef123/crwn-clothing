import './App.css';
import "@fontsource/open-sans-condensed";
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/homepage/shop/shop.component';
import {Route,Switch } from 'react-router-dom';

const HatsPage = () =>{
  return(
    <div>
      <h1>HatsPage</h1>
    </div>
  )
}
const WomenPage = () =>{
  return(
    <div>
      <h1>WomenPage</h1>
    </div>
  )
}
function App() {
  return (
    <div>
      <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/shop' component={ShopPage} />
      <Route exact path='/hats' component={HatsPage} />
      <Route exact path='/shop/womens' component={WomenPage} />
      </Switch>
    </div>
  );
}

export default App;
