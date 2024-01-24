import React from 'react';
import style from './myPosts.module.scss';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={style.posts}>
        <Post message="Hi" likeCount="115" />
        <Post message="By" likeCount="11" />
      </div>
    </>
  );
};

export default MyPosts;
