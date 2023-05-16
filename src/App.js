import "./App.css";
import "@fontsource/open-sans-condensed";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/signin" component={SignInAndSignUpPage} />
        <Route exact path="/shop" component={ShopPage} />
        {/* <Route exact path="/hats" component={HatsPage} />
        <Route exact path="/shop/womens" component={WomenPage} /> */}
      </Switch>
    </div>
  );
}

export default App;
