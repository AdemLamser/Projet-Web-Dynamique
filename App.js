import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar';
import Write from './components/Write';
import Login from './components/Login';
import Register from './components/Register';

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <>
      <Navbar user={user} setUser={setUser} />
      <Switch>
        <Route path="/home">
          {user ? <div>Home Page</div> : <Redirect to="/login" />}
        </Route>
        <Route path="/write">
          {user ? <Write user={user} /> : <Redirect to="/login" />}
        </Route>
        <Route path="/login">
          <Login setUser={setUser} />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Redirect from="/" to="/home" />
      </Switch>
    </>
  );
};

export default App;
