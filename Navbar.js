import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Navbar = ({ user, setUser }) => {
  const history = useHistory();

  const handleLogout = () => {
    setUser(null);
    history.push('/login');
  };

  return (
    <nav>
      <Link to="/home">Home</Link>
      {user ? (
        <>
          <span>{user.username}</span>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
