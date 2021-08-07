import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './Landing'


function App() {
  return (
    <Router>
        <Route path="/" exact component={Landing}/>
    </Router>
  );
}

export default App;
