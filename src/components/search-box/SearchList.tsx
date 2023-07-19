import React from 'react';
import SearchWord from './SearchWord';

import classes from './SearchList.module.css';
import { Keyword } from '../../lib/interfaces/keyword';

const SearchList: React.FC<{ keywords: Keyword[]; focusIdx: number }> = ({
  keywords,
  focusIdx,
}) => {
  return (
    <ul className={classes.searchList}>
      {keywords.map((keyword, idx) => (
        <SearchWord
          key={keyword.sickCd}
          sickNm={keyword.sickNm}
          onFocus={focusIdx === idx}
        />
      ))}
    </ul>
  );
};

export default SearchList;
