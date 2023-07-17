import React from 'react';
import SearchForm from './components/search-box/SearchForm';
import SearchDropBox from './components/search-box/SearchDropBox';
import Header from './components/layout/Header';

function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <SearchForm />
        <SearchDropBox />
      </main>
    </React.Fragment>
  );
}

export default App;
