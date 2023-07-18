import React, { useRef } from 'react';
import classes from './SearchForm.module.css'

const SearchForm: React.FC<{ onFocus: (boolean: boolean) => void, onRequestAPI: (args_0: string) => void }> = ({ onFocus, onRequestAPI }) => {
  const searchBoxInputRef = useRef<HTMLInputElement>(null);

  const apiHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onRequestAPI(e.target.value);
  }

  const localStorageKeys = Object.keys(localStorage);
  const hasKeyInLocalStorage = (keyValue: string) => {
    for (let key of localStorageKeys) {
      if (!(key === keyValue)) {
        continue;
      }
      return true;
    }
    return false;
  }


  const searchHandler = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const hasRecentlyKeywords = hasKeyInLocalStorage('recentlyKeywords');
    let recentlyKeywords: string;
    if (hasRecentlyKeywords) {
      const prevRecentlyKeywords: string[] = JSON.parse(localStorage.getItem('recentlyKeywords')!);
      const updatedRecentlyKeywords: string[] = prevRecentlyKeywords.concat(searchBoxInputRef.current!.value);
      recentlyKeywords = JSON.stringify(updatedRecentlyKeywords);
    } else {
      recentlyKeywords = JSON.stringify([searchBoxInputRef.current!.value]);
    }
    localStorage.setItem('recentlyKeywords', recentlyKeywords);
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