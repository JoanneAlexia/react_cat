import './App.css';
import React, {useContext, useState} from "react";

import CurrentCat from './Component/CurrentCat/CurrentCat';
import FavouritesBoard from './Component/FavouritesBoard/FavouritesBoard';
import Header from './Component/Header/Header';
import Login from './Component/Login/Login';
import Modal from './Component/Modal/Modal';
import FocusCat from './Component/FocusCat/FocusCat';
import CreateAccountForm from './Component/CreateAccountForm/CreateAccountForm';
import AuthContext from './store/auth-context';

function App() {
  const [changedFavourites, setChangedFavourites] = useState(false);
  const [colorScheme, setColorScheme] = useState("#325aa8");
  const [loginOpen, setLoginOpen] = useState(false);
  const [createAccountOpen, setCreateAccountOpen] = useState(false);
  const [focusCat, setFocusCat] = useState({show:false, url:"https://cdn2.thecatapi.com/images/bkk.jpg"});

  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  return (
    <div className="App">

      {/*LOGIN*/}
      <Modal 
        show={loginOpen} 
        onClose={()=>setLoginOpen(false)} 
        colorScheme={colorScheme}>
            <Login 
                setLoginOpen={setLoginOpen} 
                setCreateAccountOpen={setCreateAccountOpen}></Login>
      </Modal>
      <Modal 
        show={createAccountOpen} 
        onClose={()=>setCreateAccountOpen(false)} 
        colorScheme={colorScheme}><CreateAccountForm setCreateAccountOpen={setCreateAccountOpen}></CreateAccountForm></Modal>

      {/*HEADER*/}
      <Header 
        setLoginOpen = {setLoginOpen} 
        colorScheme={colorScheme} 
        setColorScheme={setColorScheme}>
      </Header>

      {/*NEW CAT IMAGE*/}  
      <main>
        <CurrentCat 
          setChangedFavourites={setChangedFavourites} 
          colorScheme={colorScheme}></CurrentCat>
      </main>

      {/*FAVOURITE CAT BOARD*/}
      {isLoggedIn && 
      (<div>
        <Modal 
        show={focusCat.show} 
        onClose={()=>setFocusCat({...focusCat,show: false})}><FocusCat url={focusCat.url}></FocusCat></Modal>
      <FavouritesBoard 
        focusCat={focusCat} 
        setFocusCat={setFocusCat} 
        changedFavourites={changedFavourites}
        colorScheme={colorScheme}></FavouritesBoard></div>)}

    </div>
  );
}

export default App;
