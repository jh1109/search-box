import React, { useState } from 'react';
import SearchForm from './SearchForm';
import SearchDropBox from './SearchDropBox';
import { SearchBoxService } from '../../services/searchBoxService';
import { HttpClient } from '../../lib/api/httpClient';
import { Keyword } from '../../lib/interfaces/keyword';
import { debounce } from '../../lib/utils/debounce';

const httpClient = new HttpClient('http://localhost:4000/sick');
const searchBoxService = new SearchBoxService(httpClient);

const SearchBox = () => {
  const [showDropBox, setShowDropBox] = useState(false);
  const [recommendKeywords, setRecommandKeywords] = useState<Keyword[]>([]);
  const [inputIsValid, setInputIsValid] = useState(false);
  const [focusIdx, setFocusIdx] = useState(-1);

  const recentlyKeywords = searchBoxService.getKeywords();

  const changeShowDropBoxHandler = (boolean: boolean) => {
    setShowDropBox(boolean);
  };
  const requestAPI = debounce(async (value: string) => {
    console.log('api 호출!');
    const data = await searchBoxService.postRecommandSearchWord(value);
    setRecommandKeywords(data);
  }, 500);
  const changeInputIsValid = (boolean: boolean) => {
    setInputIsValid(boolean);
  };
  const keyboardHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown') {
      setFocusIdx(focusIdx => focusIdx + 1);
    }
    if (e.key === 'ArrowUp') {
      setFocusIdx(focusIdx => focusIdx - 1);
    }
  };

  return (
    <div>
      <SearchForm
        onFocus={changeShowDropBoxHandler}
        onRequestAPI={requestAPI}
        searchBoxService={searchBoxService}
        onChange={changeInputIsValid}
        onKeyDown={keyboardHandler}
      />
      {showDropBox && (
        <SearchDropBox
          title={inputIsValid ? '추천' : '최근'}
          onClose={changeShowDropBoxHandler}
          keywords={inputIsValid ? recommendKeywords : recentlyKeywords}
          focusIdx={focusIdx}
        />
      )}
    </div>
  );
};

export default SearchBox;
