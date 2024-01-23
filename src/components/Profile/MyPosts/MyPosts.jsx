import React from 'react';
import style from './myPosts.module.scss';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <>
      <div>
        <textarea></textarea>
        <button>Add post</button>
        <button>Remove</button>
      </div>
      <div className={style.posts}>
        <Post message="Hi" likeCount="115" />
        <Post message="By" likeCount="11" />
      </div>
    </>
  );
};

export default MyPosts;
