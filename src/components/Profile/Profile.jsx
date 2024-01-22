import React from 'react';
import style from './profile.module.scss';
import img from '../../img/MainBackground.jpg';
const Profile = () => {
  return (
    <div className={style.content}>
      <div className={style.background}>
        <img src={img} alt="" />
      </div>
      <div className={style.avatar}>
        <img src="https://pixlr.com/images/index/product-image-two.webp" alt="" />
      </div>
    </div>
  );
};

export default Profile;
