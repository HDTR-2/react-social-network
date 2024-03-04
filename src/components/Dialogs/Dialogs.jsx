import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

import style from './dialogs.module.scss';
import { MessageFormSubmit } from '../common/FormSubmit/FormSubmit';

const Dialogs = (props) => {
  const state = props.dialogsPage;

  const dialogsElements = state.dialogData.map((item) => (
    <DialogItem id={item.id} key={item.id} name={item.name} />
  ));
  const messagesElements = state.messageData.map((item) => (
    <Message id={item.id} key={item.id} message={item.message} countMessage={item.countMessage} />
  ));

  return (
    <div>
      <div className={style.dialogs}>
        <div className={style.dialogsItems}>{dialogsElements}</div>
        <div className={style.messeges}>{messagesElements}</div>
        <MessageFormSubmit sendMessage={props.sendMessage} />
      </div>
    </div>
  );
};

export default Dialogs;
