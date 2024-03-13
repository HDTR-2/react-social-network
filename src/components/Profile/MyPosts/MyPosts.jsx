import React from 'react';
import style from './myPosts.module.scss';
import Post from './Post/Post';
import { PostFormSubmit } from '../../common/FormSubmit/FormSubmit';

const MyPosts = React.memo((props) => {
  let postsElement = props.postData.map((item) => (
    <Post key={item.id} message={item.message} likeCount={item.likesCount} />
  ));

  return (
    <div className={style.mypost}>
      <div className={style.addPost}>
        <PostFormSubmit addPosts={props.addPosts} />
      </div>
      <div className={style.posts}>{postsElement}</div>
    </div>
  );
});

export default MyPosts;
