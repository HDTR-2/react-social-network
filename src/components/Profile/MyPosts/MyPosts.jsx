import React from 'react';
import style from './myPosts.module.scss';
import Post from './Post/Post';

const MyPosts = (props) => {
  let postsElement = props.postData.map((item) => (
    <Post key={item.id} message={item.message} likeCount={item.likesCount} />
  ));

  const newPostElement = React.createRef();

  const onAddPost = () => {
    props.addPosts();
  };

  const onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <>
      <div className={style.postArea}>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
        </div>
        <div>
          <button onClick={onAddPost}>Add post</button>
        </div>
      </div>
      <div className={style.posts}>{postsElement}</div>
    </>
  );
};

export default MyPosts;
