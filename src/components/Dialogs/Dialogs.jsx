import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

import style from './dialogs.module.scss';

const Dialogs = (props) => {
  const state = props.dialogsPage;

  const dialogsElements = state.dialogData.map((item) => (
    <DialogItem id={item.id} key={item.id} name={item.name} />
  ));
  const messagesElements = state.messageData.map((item) => (
    <Message id={item.id} key={item.id} message={item.message} countMessage={item.countMessage} />
  ));
  const newMessageBody = state.newMessageBody;

  const onSendMessageClick = (e) => {
    props.sendMessage();
  };
  const onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  };

  return (
    <div>
      <div className={style.dialogs}>
        <div className={style.dialogsItems}>{dialogsElements}</div>
        <div className={style.messeges}>{messagesElements}</div>
      </div>
      <div className={style.textBox}>
        <div>
          <textarea
            value={newMessageBody}
            onChange={onNewMessageChange}
            className={style.textarea}></textarea>
        </div>
        <div>
          <button onClick={onSendMessageClick}>Add post</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
