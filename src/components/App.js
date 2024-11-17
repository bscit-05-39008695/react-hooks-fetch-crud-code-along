import React from 'react';
import Header from './Header';
import ShoppingList from './ShoppingList';

const App = () => {
  return (
    <div className="p-4 max-w-4xl mx-auto">
      <Header />
      <ShoppingList />
    </div>
  );
};

export default App;