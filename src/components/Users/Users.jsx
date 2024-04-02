import React from 'react';
import Paginator from '../common/Paginator/Paginator';
import User from './User';
import style from './users.module.scss';

const Users = ({
  currentPage,
  selectedPage,
  onPageChanger,
  totalUsersCount,
  pageSize,
  users,
  followingInProgress,
  follow,
  unfollow,
}) => {
  return (
    <div>
      <Paginator
        currentPage={currentPage}
        selectedPage={selectedPage}
        onPageChanger={onPageChanger}
        totalUsersCount={totalUsersCount}
        pageSize={pageSize}
      />
      {users.map((user) => (
        <div className={style.users}>
          <User
            user={user}
            key={user.id}
            followingInProgress={followingInProgress}
            follow={follow}
            unfollow={unfollow}
          />
        </div>
      ))}
    </div>
  );
};

export default Users;
