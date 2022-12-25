import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import Article from './Article';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/article/:articleId" component={Article} />
    </Router>
  );
}

export default App;