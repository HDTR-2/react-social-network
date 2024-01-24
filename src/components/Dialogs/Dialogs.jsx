import React from 'react';
import style from './dialogs.module.scss';
import { NavLink } from 'react-router-dom';

const navActive = ({ isActive }) => (isActive ? style.active : style.dialog);

const DialogItem = (props) => {
  return (
    <div className={style.dialog}>
      <NavLink to={`/dialogs/${props.id}`} className={navActive}>
        {props.name}
      </NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={style.messege}>{props.message}</div>;
};

const Dialogs = () => {
  return (
    <div>
      <div className={style.dialogs}>
        <div className={style.dialogsItems}>
          <DialogItem id="1" name="Name1" />
          <DialogItem id="2" name="Name2" />
          <DialogItem id="3" name="Name3" />
          <DialogItem id="4" name="Name4" />
        </div>
        <div className={style.messeges}>
          <Message message="Hello" />
          <Message message="Hello" />
          <Message message="Hello" />
          <Message message="Hello" />
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
