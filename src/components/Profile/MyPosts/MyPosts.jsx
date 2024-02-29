import React from 'react';
import { Field, reduxForm } from 'redux-form';
import style from './myPosts.module.scss';
import Post from './Post/Post';
import { requireField, maxLengthCreator } from '../../../utils/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';
import { PostFormSubmit } from '../../common/FormSubmit/FormSubmit';

const maxLength20 = maxLengthCreator(20);

const MyPosts = (props) => {
  let postsElement = props.postData.map((item) => (
    <Post key={item.id} message={item.message} likeCount={item.likesCount} />
  ));

  return (
    <div>
      <PostFormSubmit addPosts={props.addPosts} />
      <div className={style.posts}>{postsElement}</div>
    </div>
  );
};

export default MyPosts;
