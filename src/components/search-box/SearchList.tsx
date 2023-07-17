import React from 'react';
import SearchWord from './SearchWord';

import classes from './SearchList.module.css'

const SearchList = () => {
  return (
    <ul className={classes.searchList}>
      <SearchWord />
      <SearchWord />
      <SearchWord />
    </ul>
  );
};

export default SearchList;