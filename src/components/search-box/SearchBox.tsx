import React, { useState } from 'react';
import SearchForm from './SearchForm';
import SearchDropBox from './SearchDropBox';
import { SearchBoxService } from '../../lib/api/services/searchBoxService';
import { HttpClient } from '../../lib/api/httpClient';

const SearchBox = () => {
  const [showDropBox, setShowDropBox] = useState(false);
  const httpClient = new HttpClient('http://localhost:4000/sick');
  const searchBoxService = new SearchBoxService(httpClient);

  const changeShowDropBoxHandler = (boolean: boolean) => {
    setShowDropBox(boolean)
  }
  return (
    <div>
      <SearchForm onFocus={changeShowDropBoxHandler} searchBoxService={searchBoxService} />
      {showDropBox && <SearchDropBox onClose={changeShowDropBoxHandler} />}
    </div>
  );
};

export default SearchBox;