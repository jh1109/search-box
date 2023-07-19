import React from 'react';

import classNames from 'classnames/bind';
import classes from './SearchWord.module.css';

const cx = classNames.bind(classes);

const SearchWord: React.FC<{ sickNm: string; onFocus: boolean }> = ({
  sickNm,
  onFocus,
}) => {
  return <li className={cx('searchword', { onFocus })}>{sickNm}</li>;
};

export default SearchWord;
