import React from 'react';
import style from './sidebar.module.scss';
import { NavLink } from 'react-router-dom';

const navActive = ({ isActive }) => (isActive ? style.active : style.item);

const Sidebar = () => {
  return (
    <nav className={style.sidebar}>
      <ul>
        <li className={style.item}>
          <NavLink to="/profile" className={navActive}>
            Profile
          </NavLink>
        </li>

        <li className={style.item}>
          <NavLink to="/dialogs" className={navActive}>
            Messages
          </NavLink>
        </li>

        <li className={style.item}>
          <NavLink to="/news" className={navActive}>
            News
          </NavLink>
        </li>

        <li className={style.item}>
          <NavLink to="/music" className={navActive}>
            Music
          </NavLink>
        </li>

        <li className={style.item}>
          <NavLink to="/settings" className={navActive}>
            Settings
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
