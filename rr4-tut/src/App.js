import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Posts from './routes/Posts';
import MyPage from './routes/MyPage';
import Login from './routes/Login';
import Search from './routes/Search';

import Header from './components/Header'

const App = () => {
  return (
    <Router>
      <div>
        <Header/>
        <Route exact path="/" component={Home}/>
        <Route path="/about/:username" component={About}/>
        <Route path="/posts" component={Posts}/>
        <Route path="/me" component={MyPage}/>
        <Route path="/login" component={Login}/>
        <Route path="/search" component={Search}/>
      </div>
    </Router>
  );
};

export default App;