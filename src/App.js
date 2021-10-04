import './App.css';
import React, {useState, useEffect} from "react";

import CurrentCat from './Component/CurrentCat/CurrentCat';
import FavouritesBoard from './Component/FavouritesBoard/FavouritesBoard';
import Header from './Component/Header/Header';
import Login from './Component/Login/Login';
import Modal from './Component/Modal/Modal';
import FocusCat from './Component/FocusCat/FocusCat';
import CreateAccountForm from './Component/CreateAccountForm/CreateAccountForm';

function App() {
  
  const [favourite, setFavourite] = useState([{id: 1, url:"https://cdn2.thecatapi.com/images/bkk.jpg"}, {id: "yHZ1Cr6fd", url: "https://cdn2.thecatapi.com/images/yHZ1Cr6fd.jpg"}]);
  const [colorScheme, setColorScheme] = useState("#325aa8");
  const [loginOpen, setLoginOpen] = useState(false);
  const [createAccountOpen, setCreateAccountOpen] = useState(false);
  const [focusCat, setFocusCat] = useState({show:false, url:"https://cdn2.thecatapi.com/images/bkk.jpg"});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLogin = localStorage.getItem("isLoggedIn");
    if (storedUserLogin === "1"){
      setIsLoggedIn(true);
    }
  },[]);

  return (
    <div className="App">
      {/*LOGIN*/}
      <Modal 
        show={loginOpen} 
        onClose={()=>setLoginOpen(false)} 
        colorScheme={colorScheme}>
            <Login 
                setLoginOpen={setLoginOpen} 
                setCreateAccountOpen={setCreateAccountOpen}
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}></Login>
      </Modal>
      <Modal 
        show={createAccountOpen} 
        onClose={()=>setCreateAccountOpen(false)} 
        colorScheme={colorScheme}><CreateAccountForm></CreateAccountForm></Modal>

      {/*HEADER*/}
      <Header 
        setLoginOpen = {setLoginOpen} 
        isLoggedIn = {isLoggedIn}
        setIsLoggedIn = {setIsLoggedIn}
        colorScheme={colorScheme} 
        setColorScheme={setColorScheme}>
      </Header>

      {/*NEW CAT IMAGE*/}  
      <main>
        <CurrentCat 
          favourite={favourite} 
          setFavourite={setFavourite} 
          colorScheme={colorScheme}></CurrentCat>
      </main>

      {/*FAVOURITE CAT BOARD*/}
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
