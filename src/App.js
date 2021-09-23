import './App.css';
import React, {useState} from "react";

import CurrentCat from './Component/CurrentCat/CurrentCat';
import FavouriteCat from './Component/FavouriteCat/FavouriteCat';
import Header from './Component/Header/Header';
import Login from './Component/Login/Login';

function App() {
  const [favourite, setFavourite] = useState([{id: 1, url:"https://cdn2.thecatapi.com/images/bkk.jpg"}, {id: "yHZ1Cr6fd", url: "https://cdn2.thecatapi.com/images/yHZ1Cr6fd.jpg"}]);
  const [colorScheme, setColorScheme] = useState("#325aa8");
  const [loginOpen, setLoginOpen] = useState(false)
  return (
    <div className="App">
      <Login loginOpen={loginOpen} setLoginOpen={setLoginOpen} colorScheme={colorScheme} ></Login>
      <Header setLoginOpen = {setLoginOpen} colorScheme={colorScheme} setColorScheme={setColorScheme}></Header>
      <main>
        <CurrentCat favourite={favourite} setFavourite={setFavourite} colorScheme={colorScheme}></CurrentCat>
      </main>
      <FavouriteCat favourite={favourite} colorScheme={colorScheme}></FavouriteCat>
    </div>
  );
}

export default App;
