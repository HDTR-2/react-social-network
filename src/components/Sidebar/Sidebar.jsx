import React from 'react';
import style from './sidebar.module.scss';
const Sidebar = () => {
  return (
    <nav className={style.sidebar}>
      <ul>
        <a href="/profile">
          <li className={style.item}>Profile</li>
        </a>
        <a href="/dialogs">
          <li className={style.item}>Messages</li>
        </a>
        <a href="/news">
          <li className={style.item}>News</li>
        </a>
        <a href="/music">
          <li className={style.item}>Music</li>
        </a>
        <a href="/settings">
          <li className={style.item}>Settings</li>
        </a>
      </ul>
    </nav>
  );
};

export default Sidebar;
