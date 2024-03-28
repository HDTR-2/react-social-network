import React from 'react';
import userPhoto from '../../../img/userDefault.svg';

const AvatarDefault = ({ item }) => {
  return <img src={item.photos.small != null ? item.photos.small : userPhoto} />;
};

export default AvatarDefault;
