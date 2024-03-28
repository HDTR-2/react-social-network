import React from 'react';
import style from './users.module.scss';
import { NavLink } from 'react-router-dom';
import AvatarDefault from '../common/AvatarDefault/AvatarDefault';

const User = ({ user, followingInProgress, follow, unfollow }) => {
  return (
    <div>
      <div key={user.id} className={style.user}>
        <span className={style.photoBtn}>
          <div className={style.userPhoto}>
            <NavLink to={`/profile/${user.id}`}>
              <AvatarDefault item={user} />
            </NavLink>
          </div>
          <div className={style.button}>
            {user.followed ? (
              <button
                disabled={followingInProgress.some((id) => id === user.id)}
                onClick={() => {
                  unfollow(user.id);
                }}>
                Unfollow
              </button>
            ) : (
              <button
                disabled={followingInProgress.some((id) => id === user.id)}
                onClick={() => {
                  follow(user.id);
                }}>
                Follow
              </button>
            )}
          </div>
        </span>
        <span className={style.about}>
          <span className={style.text}>
            <div>{user.name}</div>
            <div>{user.status}</div>
          </span>
          <span className={style.location}>
            <div>{'user.location.country'}</div>
            <div>{'user.location.city'}</div>
          </span>
        </span>
      </div>
    </div>
  );
};

export default User;
