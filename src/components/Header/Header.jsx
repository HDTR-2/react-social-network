import React from 'react';
import style from './header.module.scss';
import img from '../../img/Logo.svg';
import { NavLink } from 'react-router-dom';
const Header = ({ isAuth, login, logout }) => {
  return (
    <header className={style.header}>
      <a href="/">
        <img src={img} alt="logo" />
      </a>
      <div className={style.loginBlock}>
        {isAuth ? (
          <div>
            {login} -{' '}
            <button className={style.logout} onClick={logout}>
              Log out
            </button>{' '}
          </div>
        ) : (
          <NavLink to={'/login'} className={style.link}>
            <span>Log in</span>
          </NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
