import './App.css';

import CurrentCat from './Component/CurrentCat/CurrentCat';
import FavouriteCat from './Component/FavouriteCat/FavouriteCat'
import React, {useState} from "react";

function App() {
  const [favorite, setFavourite] = useState("https://cdn2.thecatapi.com/images/bkk.jpg");

  return (
    <div className="App">
      <h1>Cat App</h1>
      <CurrentCat setFavourite={setFavourite}></CurrentCat>
      <FavouriteCat url={favorite}></FavouriteCat>
    </div>
  );
}

export default App;
