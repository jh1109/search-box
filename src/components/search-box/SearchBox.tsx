import React, { useState } from 'react';
import SearchForm from './SearchForm';
import SearchDropBox from './SearchDropBox';
import { SearchBoxService } from '../../services/searchBoxService';
import { HttpClient } from '../../lib/api/httpClient';
import { Keyword } from '../../lib/interfaces/keyword';
import { debounce } from '../../lib/utils/debounce';

const SearchBox = () => {
  const [showDropBox, setShowDropBox] = useState(false);
  const [recommandKeywords, setRecommandKeywords] = useState<Keyword[]>([]);

  const httpClient = new HttpClient('http://localhost:4000/sick');
  const searchBoxService = new SearchBoxService(httpClient);

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
      <SearchForm onFocus={changeShowDropBoxHandler} onRequestAPI={requestAPI} />
      {showDropBox && <SearchDropBox onClose={changeShowDropBoxHandler} keywords={recommandKeywords} />}
    </div>
  );
};

export default SearchBox;