import './App.css';
import React, {useState} from "react";

import CurrentCat from './Component/CurrentCat/CurrentCat';
import FavouritesBoard from './Component/FavouritesBoard/FavouritesBoard';
import Header from './Component/Header/Header';
import Login from './Component/Login/Login';
import Modal from './Component/Modal/Modal';
import FocusCat from './Component/FocusCat/FocusCat';

function App() {
  const [favourite, setFavourite] = useState([{id: 1, url:"https://cdn2.thecatapi.com/images/bkk.jpg"}, {id: "yHZ1Cr6fd", url: "https://cdn2.thecatapi.com/images/yHZ1Cr6fd.jpg"}]);
  const [colorScheme, setColorScheme] = useState("#325aa8");
  const [loginOpen, setLoginOpen] = useState(false);
  const [focusCat, setFocusCat] = useState({show:false, url:"https://cdn2.thecatapi.com/images/bkk.jpg"});

  return (
    <div className="App">
      <Modal 
        show={loginOpen} 
        onClose={()=>setLoginOpen(false)} 
        colorScheme={colorScheme}><Login></Login></Modal>
      <Header 
        setLoginOpen = {setLoginOpen} 
        colorScheme={colorScheme} 
        setColorScheme={setColorScheme}></Header>
      <main>
        <CurrentCat 
          favourite={favourite} 
          setFavourite={setFavourite} 
          colorScheme={colorScheme}></CurrentCat>
      </main>
      <Modal 
        show={focusCat.show} 
        onClose={()=>setFocusCat({...focusCat,show: false})}><FocusCat url={focusCat.url}></FocusCat></Modal>
      <FavouritesBoard 
        focusCat={focusCat} 
        setFocusCat={setFocusCat} 
        favourite={favourite} 
        colorScheme={colorScheme}></FavouritesBoard>
    </div>
  );
}

export default App;
