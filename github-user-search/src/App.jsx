import React from 'react';
import UserSearch from './components/UserSearch';
import Search from './components/Search';

function App() {
  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-2xl font-bold text-center mb-6">GitHub User Search</h1>
      <UserSearch />
      <Search />
    </div>
    </div>
  );
}

export default App;
