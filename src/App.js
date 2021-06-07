import './App.css';
import MealDetail from './Component/MealDetail/MealDetail';
import MealFinder from './Component/MealFinder/MealFinder';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFound from './NotFound/NotFound';
import DetailInfo from './DetailInfo/DetailInfo';

function App() {
  return (
    <div className="App">
      <MealDetail></MealDetail>

      <Router>
        <Switch>
          <Route path="home">
            <MealFinder></MealFinder>
          </Route>
          <Route path="/detailInfo/:mealId">
            <DetailInfo></DetailInfo>
          </Route>
          <Route exact path="/">
            <MealFinder></MealFinder>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
