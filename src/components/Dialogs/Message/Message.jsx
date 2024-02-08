import React from 'react';

import style from './message.module.scss';

const Message = (props) => {
  return (
    <div className={style.block}>
      <div className={style.messege}>{props.message}</div>
      <div className={style.countMessage}>{props.countMessage}</div>
    </div>
  );
};

export default Message;
