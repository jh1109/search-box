import React from 'react';

import classes from './SearchWord.module.css'
import { Keyword } from '../../lib/interfaces/keyword';

const SearchWord: React.FC<{ keyword: Keyword }> = ({ keyword }) => {
  return (
    <li className={classes.searchword}>
      {keyword.sickNm}
    </li>
  );
};

export default SearchWord;