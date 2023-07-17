import React from 'react';

import classes from './SearchDropBox.module.css'
import SearchList from './SearchList';

const SearchDropBox = () => {
  return (
    <section className={classes.dropBox}>
      <h2>최근 검색어</h2>
      <SearchList />
    </section>
  );
};

export default SearchDropBox;