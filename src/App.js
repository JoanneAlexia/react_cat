import './App.css';
import React, {useState} from "react";

import CurrentCat from './Component/CurrentCat/CurrentCat';
import FavouriteCat from './Component/FavouriteCat/FavouriteCat';
import Header from './Component/Header/Header';

function App() {
  const [favorite, setFavourite] = useState("https://cdn2.thecatapi.com/images/bkk.jpg");
  const [colorScheme, setColorScheme] = useState("#325aa8");

  return (
    <div className="App">
      <Header colorScheme={colorScheme} setColorScheme={setColorScheme}></Header>
      <main>
        <CurrentCat setFavourite={setFavourite} colorScheme={colorScheme}></CurrentCat>
      </main>
      
      <FavouriteCat url={favorite} colorScheme={colorScheme}></FavouriteCat>
    </div>
  );
}

export default App;
