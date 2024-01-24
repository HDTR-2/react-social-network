import React from 'react';
import style from './profileInfo.module.scss';
import img from '../../../img/MainBackground.jpg';

const ProfileInfo = () => {
  return (
    <div>
      <div className={style.background}>
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default ProfileInfo;
