import React, { useState } from 'react';
import SearchForm from './SearchForm';
import SearchDropBox from './SearchDropBox';

const SearchBox = () => {
  const [showDropBox, setShowDropBox] = useState(false);

  const changeShowDropBoxHandler = (boolean: boolean) => {
    setShowDropBox(boolean)
  }
  return (
    <div>
      <SearchForm onFocus={changeShowDropBoxHandler} />
      {showDropBox && <SearchDropBox onClose={changeShowDropBoxHandler} />}
    </div>
  );
};

export default SearchBox;