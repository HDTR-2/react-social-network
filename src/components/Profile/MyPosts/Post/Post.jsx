import React from 'react';
import style from './post.module.scss';
import avatar from '../../../../img/Avatar.webp';

const Post = ({ message, likeCount }) => {
  return (
    <div className={style.post}>
      <img src={avatar} alt="" />
      <p>{message}</p>
      <span> Like {likeCount}</span>
    </div>
  );
};

export default Post;
