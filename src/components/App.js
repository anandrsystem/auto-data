import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useParams,
  useRouteMatch
} from "react-router-dom";

import Header from './shared/Header';
import SubHeader from './shared/SubHeader';
import Footer from './shared/Footer';
import VehiclesComponent from './vehicles/VehiclesComponent';
import CompareVehicle from './vehicles/CompareVehicle';

const App = () => (
  <Router>
    <div className="container">
      <Switch>
        <Route exact path="/">
          <Header></Header>
          <VehiclesComponent></VehiclesComponent>
        </Route>
        <Route exact path="/compare">
          <SubHeader></SubHeader>
          <CompareVehicle></CompareVehicle>
        </Route>
      </Switch>
      <Footer></Footer>
    </div>
  </Router>
)

export default App;
