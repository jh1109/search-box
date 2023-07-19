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
  const [recommendKeywords, setRecommendKeywords] = useState<Keyword[]>([]);
  const [recentlyKeywords, setRecentlyKeywords] = useState<Keyword[]>([]);
  const [inputIsValid, setInputIsValid] = useState(false);
  const [focusIdx, setFocusIdx] = useState(-1);

  const changeShowDropBoxHandler = (boolean: boolean) => {
    setShowDropBox(boolean);
  };
  const requestAPI = debounce(async (value: string) => {
    console.info('calling api');
    const data = await searchBoxService.postRecommandSearchWord(value);
    setRecommendKeywords(data);
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
  const addRecentlyKeywords = (keyword: Keyword) => {
    setRecentlyKeywords(recentlyKeywords => [keyword, ...recentlyKeywords]);
  };

  return (
    <div>
      <SearchForm
        onFocus={changeShowDropBoxHandler}
        onRequestAPI={requestAPI}
        searchBoxService={searchBoxService}
        onChange={changeInputIsValid}
        onKeyDown={keyboardHandler}
        onAddKeyword={addRecentlyKeywords}
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
