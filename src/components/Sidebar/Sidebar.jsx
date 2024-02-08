import React from 'react';
import style from './sidebar.module.scss';
import { NavLink } from 'react-router-dom';
import Friends from './Friends/Friends';

const navActive = ({ isActive }) => (isActive ? style.active : style.item);

const Sidebar = (props) => {
  return (
    <>
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
        {/* <h2>Friends</h2>
        <div className={style.friends}>
          {props.state.friends.map((item) => (
            <Friends key={item.id} name={item.name} />
          ))}
        </div> */}
      </nav>
    </>
  );
};

export default Sidebar;
