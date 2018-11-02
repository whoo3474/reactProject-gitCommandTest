import React from 'react';
import {NavLink} from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <NavLink to="/" className="item" activeClassName="active" exact>홈</NavLink>
      <NavLink to="/about/jeongmin" className="item">소개</NavLink>
      <NavLink to="/posts" className="item">포스트</NavLink>
    </div>

  );
};

export default Header;