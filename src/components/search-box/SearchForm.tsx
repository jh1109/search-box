import React, { useRef } from 'react';
import classes from './SearchForm.module.css'
import { SearchBoxService } from '../../services/searchBoxService';

const SearchForm: React.FC<{ onFocus: (boolean: boolean) => void, onRequestAPI: (args_0: string) => void, searchBoxService: SearchBoxService }> = ({ onFocus, onRequestAPI, searchBoxService }) => {
  const searchBoxInputRef = useRef<HTMLInputElement>(null);

  const apiHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onRequestAPI(e.target.value);
  }

  const searchHandler = () => {
    searchBoxService.saveKeyword(searchBoxInputRef.current!.value);
  }

  return (
    <form className={classes.searchForm} onSubmit={searchHandler}>
      <label htmlFor='searchBox' className='a11yHidden'>검색창</label>
      <input
        type='text'
        name='searchBox'
        placeholder='검색어를 입력해주세요.'
        onFocus={() => onFocus(true)}
        ref={searchBoxInputRef}
        onChange={apiHandler} />
      <button type='reset' className={classes.resetBtn}>X</button>
      <button type='submit' className={classes.submitBtn}>검색</button>
    </form>
  );
};

export default SearchForm;