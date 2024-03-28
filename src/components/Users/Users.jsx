import React from 'react';
import Paginator from '../common/Paginator/Paginator';
import User from './User';

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
  let pagesCount = Math.ceil(totalUsersCount / pageSize);

  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

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
        <User
          user={user}
          key={user.id}
          followingInProgress={followingInProgress}
          follow={follow}
          unfollow={unfollow}
        />
      ))}
    </div>
  );
};

export default Users;
