import React, { useState } from 'react';
import SearchForm from './SearchForm';
import SearchDropBox from './SearchDropBox';
import { SearchBoxService } from '../../lib/api/services/searchBoxService';
import { HttpClient } from '../../lib/api/httpClient';
import { Keyword } from '../../lib/interfaces/keyword';

const SearchBox = () => {
  const [showDropBox, setShowDropBox] = useState(false);
  const [recommandKeywords, setRecommandKeywords] = useState<Keyword[]>([]);

  const httpClient = new HttpClient('http://localhost:4000/sick');
  const searchBoxService = new SearchBoxService(httpClient);

  const changeShowDropBoxHandler = (boolean: boolean) => {
    setShowDropBox(boolean)
  }
  const getRecommandKeywordsHandler = (recommandKeywords: Keyword[]) => {
    setRecommandKeywords(recommandKeywords);
  }

  return (
    <div>
      <SearchForm onFocus={changeShowDropBoxHandler} searchBoxService={searchBoxService} getRecommandKeywords={getRecommandKeywordsHandler} />
      {showDropBox && <SearchDropBox onClose={changeShowDropBoxHandler} keywords={recommandKeywords} />}
    </div>
  );
};

export default SearchBox;