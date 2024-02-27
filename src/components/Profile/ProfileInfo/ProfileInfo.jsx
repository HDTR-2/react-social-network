import React from 'react';
import style from './profileInfo.module.scss';
import img from '../../../img/MainBackground.jpg';
import Preloader from '../../common/Preloader/Preloader';
import userPhoto from '../../../img/userDefault.svg';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div>
      <div className={style.background}>
        <img src={img} alt="" />
      </div>
      <div className={style.descriptionBlock}>
        <img
          src={props.profile.photos.large !== null ? props.profile.photos.large : userPhoto}
          alt="User Avatar"
        />

        <p className={style.description}>
          <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
        </p>
        <div className={style.contacts}>
          <a href={props.profile.contacts.vk}>VK</a>
          <a href={props.profile.contacts.facebook}>Facebook</a>
          <a href={props.profile.contacts.instagram}>Instagram</a>
          <a href={props.profile.contacts.twitter}>Twitter</a>
          <a href={props.profile.contacts.github}>Github</a>
          <a href={props.profile.contacts.youtube}>YouTube</a>
          <a href={props.profile.contacts.website}>website</a>
          <a href={props.profile.contacts.mainLink}>mainLink</a>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
