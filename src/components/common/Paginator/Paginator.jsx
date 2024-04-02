import React, { useState } from 'react';
import style from './Paginator.module.scss';

const Paginator = ({ totalUsersCount, pageSize, currentPage, onPageChanger, dataSize = 20 }) => {
  const pagesCount = Math.ceil(totalUsersCount / pageSize);
  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const dataCount = Math.ceil(pagesCount / dataSize);
  const [dataNumber, setDataNumber] = useState(1);
  const leftDataPageNumber = (dataNumber - 1) * dataSize + 1;
  const rightDataPageNumber = dataNumber * dataSize;

  return (
    <div>
      <div className={style.pagginationPages}>
        {dataNumber > 1 && <span onClick={() => setDataNumber(dataNumber - 1)}> ← </span>}
        {pages
          .filter((p) => p >= leftDataPageNumber && p <= rightDataPageNumber)
          .map((p) => {
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
        {dataCount > dataNumber && <span onClick={() => setDataNumber(dataNumber + 1)}> → </span>}
      </div>
    </div>
  );
};

export default Paginator;
