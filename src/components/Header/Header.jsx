import React from 'react';
import style from './header.module.scss';
import img from '../../img/Logo.svg';
import { NavLink } from 'react-router-dom';
const Header = (props) => {
  return (
    <header className={style.header}>
      <a href="/">
        <img src={img} alt="logo" />
      </a>
      <div className={style.loginBlock}>
        {props.isAuth ? props.login : <NavLink to={'/login'}>Log in</NavLink>}
      </div>
    </header>
  );
};

export default Header;
