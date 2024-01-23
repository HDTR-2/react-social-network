import React from 'react';
import style from './profile.module.scss';
import img from '../../img/MainBackground.jpg';
import MyPosts from './MyPosts/MyPosts';
const Profile = () => {
  return (
    <div>
      <div className={style.background}>
        <img src={img} alt="" />
      </div>

      <MyPosts />
    </div>
  );
};

export default Profile;
