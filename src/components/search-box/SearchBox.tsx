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

  const recentlyKeywords = searchBoxService.getKeywords();

  const changeShowDropBoxHandler = (boolean: boolean) => {
    setShowDropBox(boolean)
  }
  const requestAPI = debounce(async (value: string) => {
    console.log('api 호출!');
    const data = await searchBoxService.postRecommandSearchWord(value);
    setRecommandKeywords(data);
  }, 500);

  return (
    <div>
      <SearchForm onFocus={changeShowDropBoxHandler} onRequestAPI={requestAPI} searchBoxService={searchBoxService} />
      {showDropBox && <SearchDropBox onClose={changeShowDropBoxHandler} keywords={recommendKeywords} />}
      {showDropBox && <SearchDropBox onClose={changeShowDropBoxHandler} keywords={recentlyKeywords} />}
    </div>
  );
};

export default SearchBox;