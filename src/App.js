import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import ProductDetails from "./Components/Products/ProductDeatlis";
import ProductList from "./Components/Products/ProductList";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductList} />
          <Route path="/product/:productId" exact component={ProductDetails} />
          <Route>404 not found</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
