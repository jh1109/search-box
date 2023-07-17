import React from 'react';
import classes from './SearchForm.module.css'

const SearchForm: React.FC<{ onFocus: (boolean: boolean) => void }> = ({ onFocus }) => {
  return (
    <form className={classes.searchForm}>
      <label htmlFor='searchBox' className='a11yHidden'>검색창</label>
      <input type="text" name='searchBox' placeholder='검색어를 입력해주세요.' onFocus={() => onFocus(true)} />
      <button type='reset' className={classes.resetBtn}>X</button>
      <button type='submit' className={classes.submitBtn}>검색</button>
    </form>
  );
};

export default SearchForm;