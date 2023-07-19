import React from 'react';
import Header from './components/layout/Header';
import SearchBox from './components/search-box/SearchBox';

function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <SearchBox />
      </main>
    </React.Fragment>
  );
}

export default App;
