import React from 'react';
import style from './header.module.scss';
import img from '../../img/Logo.svg';
const Header = () => {
  return (
    <header className={style.header}>
      <h1>
        <a href="/">
          <img src={img} alt="logo" />
        </a>
      </h1>
    </header>
  );
};

export default Header;
