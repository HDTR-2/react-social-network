import React from 'react';
import style from './Paginator.module.scss';

const Paginator = ({ totalUsersCount, pageSize, currentPage, onPageChanger }) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);

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
              className={currentPage === p && style.selectedPage}
              onClick={(e) => {
                onPageChanger(p);
              }}>
              {p}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Paginator;
