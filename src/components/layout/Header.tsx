import React from 'react';

import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.header}>
      <h1>
        국내 모든 임상시험 검색하고 <br></br>온라인으로 참여하기
      </h1>
    </header>
  );
};

export default Header;
