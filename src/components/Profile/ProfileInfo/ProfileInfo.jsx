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
        <div className={style.contacts}>
          <a href={profile.contacts.vk}>VK</a>
          <a href={profile.contacts.facebook}>Facebook</a>
          <a href={profile.contacts.instagram}>Instagram</a>
          <a href={profile.contacts.twitter}>Twitter</a>
          <a href={profile.contacts.github}>Github</a>
          <a href={profile.contacts.youtube}>YouTube</a>
          <a href={profile.contacts.website}>website</a>
          <a href={profile.contacts.mainLink}>mainLink</a>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
