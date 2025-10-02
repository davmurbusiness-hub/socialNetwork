import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import MyButton from "../button/MyButton.jsx";
import {AuthContext} from "../../../context/index.js";

const Navbar = () => {
  const {isAuthenticated, setIsAuthenticated} = useContext(AuthContext);

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('auth');
  }

  return (
    <div className="nav__bar">
      <div className="nav__bar__links">
        <Link to="/about">Home</Link>
        <Link to="/posts">Posts</Link>
      </div>
      <MyButton onClick={logout}>
        Выйти
      </MyButton>
    </div>
  );
};

export default Navbar;