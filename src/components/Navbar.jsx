import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        UMC Movie
      </div>
      <div className="navbar-links">
        <NavLink to="/popular" exact activeClassName="active">로그인</NavLink>
        <NavLink to="/popular" activeClassName="active">Popular</NavLink>
        <NavLink to="/now-playing" activeClassName="active">Now Playing</NavLink>
        <NavLink to="/top-rated" activeClassName="active">Top Rated</NavLink>
        <NavLink to="/upcoming" activeClassName="active">Upcoming</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
