import React from 'react';
import SearchWord from './SearchWord';

import classes from './SearchList.module.css'
import { Keyword } from '../../lib/interfaces/keyword';

const SearchList: React.FC<{ keywords: Keyword[] }> = ({ keywords }) => {
  return (
    <ul className={classes.searchList}>
      {keywords.map(keyword => <SearchWord key={keyword.sickCd} keyword={keyword} />)}
    </ul>
  );
};

export default SearchList;