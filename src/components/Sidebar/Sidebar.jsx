import React from 'react';
import style from './sidebar.module.scss';
const Sidebar = () => {
  return (
    <nav className={style.sidebar}>
      <ul>
        <a>
          <li className={style.item}>Profile</li>
        </a>
        <a>
          <li className={style.item}>Messages</li>
        </a>
        <a>
          <li className={style.item}>News</li>
        </a>
        <a>
          <li className={style.item}>Music</li>
        </a>
        <a>
          <li className={style.item}>Settings</li>
        </a>
      </ul>
    </nav>
  );
};

export default Sidebar;
