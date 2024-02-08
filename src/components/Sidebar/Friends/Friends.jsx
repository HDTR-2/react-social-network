import React from 'react';

import style from './friends.module.scss';

const Friends = (props) => {
  return <div className={style.friend}>{props.name}</div>;
};

export default Friends;
