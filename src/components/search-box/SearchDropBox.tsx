import React, { ReactNode } from 'react';

import classes from './SearchDropBox.module.css'
import SearchList from './SearchList';
import { Keyword } from '../../lib/interfaces/keyword';

const SearchDropBox: React.FC<{ onClose: (boolean: boolean) => void, keywords: Keyword[] }> = ({ onClose, keywords }) => {
  let content: ReactNode;
  if (keywords.length === 0) {
    content = <p>추천 검색어가 없습니다.</p>
  } else {
    content = <SearchList keywords={keywords} />
  }
  return (
    <section className={classes.dropBox}>
      <h2>최근 검색어</h2>
      {content}
      <button type='button' onClick={() => onClose(false)}>닫기</button>
    </section>
  );
};

export default SearchDropBox;