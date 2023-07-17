import React, { useRef } from 'react';
import classes from './SearchForm.module.css'

const SearchForm: React.FC<{ onFocus: (boolean: boolean) => void }> = ({ onFocus }) => {
  const searchBoxInputRef = useRef<HTMLInputElement>(null);

  const apiHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('API 호출!');
    const response = await fetch(`http://localhost:4000/sick?q=${e.target.value}`, {
      method: 'GET',
    });
    console.log(response);
    const data = response.json();
    console.log(data);
  }
  return (
    <form className={classes.searchForm}>
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