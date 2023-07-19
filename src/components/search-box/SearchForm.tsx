import React, { useRef, useState } from 'react';
import classes from './SearchForm.module.css';
import { SearchBoxService } from '../../services/searchBoxService';
import { hasKeyInLocalStorage } from '../../lib/utils/hasKeyInLocalStorage';

const SearchForm: React.FC<{
  onFocus: (boolean: boolean) => void;
  onRequestAPI: (args_0: string) => void;
  searchBoxService: SearchBoxService;
  onChange: (boolean: boolean) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onAddKeyword: (value: string) => void;
}> = ({
  onFocus,
  onRequestAPI,
  searchBoxService,
  onChange,
  onKeyDown,
  onAddKeyword,
}) => {
  const searchBoxInputRef = useRef<HTMLInputElement>(null);
  const initialHasKey = hasKeyInLocalStorage(searchBoxService.key);
  const [hasKey, setHasKey] = useState(initialHasKey);

  const apiHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = searchBoxInputRef.current!.value.trim();
    onRequestAPI(value);
    const isValid = value.length > 0;
    onChange(isValid);
  };

  const searchHandler = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = searchBoxInputRef.current!.value.trim();
    searchBoxService.saveKeyword(hasKey, value);
    !hasKey && setHasKey(true);
    onAddKeyword(value);
    onFocus(false);
    searchBoxInputRef.current!.blur();
  };

  return (
    <form className={classes.searchForm} onSubmit={searchHandler}>
      <label htmlFor="searchBox" className="a11yHidden">
        검색창
      </label>
      <input
        type="text"
        name="searchBox"
        placeholder="검색어를 입력해주세요."
        onFocus={() => onFocus(true)}
        ref={searchBoxInputRef}
        onChange={apiHandler}
        autoComplete="off"
        onKeyDown={onKeyDown}
      />
      <button type="reset" className={classes.resetBtn}>
        X
      </button>
      <button type="submit" className={classes.submitBtn}>
        검색
      </button>
    </form>
  );
};

export default SearchForm;
