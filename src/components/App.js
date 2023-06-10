import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import { useState } from 'react';


const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  const appClass = darkMode ? 'dark-mode' : 'light-mode';

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
         <button onClick={handleDarkModeToggle}>
        Toggle Dark Mode
      </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
