import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './Landing'
import Directions from "./Directions"


function App() {
  return (
    <Router>
        <Route path="/" exact component={Landing}/>
        <Route path="/maps" exact component={Directions}/>
    </Router>
  );
}

export default App;
