import React from 'react';
import { NavLink } from 'react-router-dom';
import avatar from '../../../img/Avatar.webp';
import style from '../dialogs.module.scss';

const navActive = ({ isActive }) => (isActive ? style.active : style.dialog);

const DialogItem = (props) => {
  return (
    <div className={style.dialog}>
      <img src={avatar} alt="" />
      <NavLink to={`/dialogs/${props.id}`} className={navActive}>
        {props.name}
      </NavLink>
    </div>
  );
};

export default DialogItem;
