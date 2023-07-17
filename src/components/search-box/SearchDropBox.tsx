import React from 'react';

import classes from './SearchDropBox.module.css'
import SearchList from './SearchList';

const SearchDropBox: React.FC<{ onClose: (boolean: boolean) => void }> = ({ onClose }) => {
  return (
    <section className={classes.dropBox}>
      <h2>최근 검색어</h2>
      <SearchList />
      <button type='button' onClick={() => onClose(false)}>닫기</button>
    </section>
  );
};

export default SearchDropBox;