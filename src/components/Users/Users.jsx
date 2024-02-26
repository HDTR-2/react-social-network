import React from 'react';
import style from './users.module.scss';
import userPhoto from '../../img/userDefault.svg';
import { NavLink } from 'react-router-dom';
import { userAPI } from '../../api/api';

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div className={style.pagginationPages}>
        {pages.map((p) => {
          return (
            <span
              className={props.currentPage === p && style.selectedPage}
              onClick={(e) => {
                props.onPageChanger(p);
              }}>
              {p}
            </span>
          );
        })}
      </div>
      {props.users.map((user) => (
        <div key={user.id} className={style.user}>
          <span className={style.photoBtn}>
            <div className={style.userPhoto}>
              <NavLink to={`/profile/${user.id}`}>
                <img src={user.photos.small != null ? user.photos.small : userPhoto} />
              </NavLink>
            </div>
            <div className={style.button}>
              {user.followed ? (
                <button
                  disabled={props.followingInProgress.some((id) => id === user.id)}
                  onClick={() => {
                    props.unfollow(user.id);
                  }}>
                  Unfollow
                </button>
              ) : (
                <button
                  disabled={props.followingInProgress.some((id) => id === user.id)}
                  onClick={() => {
                    props.follow(user.id);
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
      ))}
    </div>
  );
};

export default Users;
