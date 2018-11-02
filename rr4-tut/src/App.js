import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Posts from './routes/Posts';
import MyPage from './routes/MyPage';
import Login from './routes/Login';
import Search from './routes/Search';
import NoMatch from './routes/NoMatch';

import Header from './components/Header'

const App = () => {
  return (
    <Router>
      <div>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about/:username" component={About}/>
          <Route path="/posts" component={Posts}/>
          <Route path="/me" component={MyPage}/>
          <Route path="/login" component={Login}/>
          <Route path="/search" component={Search}/>
          <Route component={NoMatch}/>
          {/* Switch 를 사용하면 path에 부합되는것이 없을시에 가장 아래에 있는것을 보여준다. */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;