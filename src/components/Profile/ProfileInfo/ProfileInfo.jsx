import React from 'react';
import style from './profileInfo.module.scss';
import img from '../../../img/MainBackground.jpg';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import AvatarDefault from '../../common/AvatarDefault/AvatarDefault';

const ProfileInfo = ({ profile, status, updateStatus }) => {
  if (!profile) {
    return <Preloader />;
  }
  return (
    <div>
      <div className={style.background}>
        <img src={img} alt="" />
      </div>
      <div className={style.descriptionBlock}>
        <AvatarDefault item={profile} />

        <p className={style.description}>
          <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
        </p>
      </div>
    </div>
  );
};

export default ProfileInfo;
