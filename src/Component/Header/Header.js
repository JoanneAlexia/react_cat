import './Header.css';
import {useContext} from 'react';

import AuthContext from '../../store/auth-context';

function Header(props){
    const authCtx = useContext(AuthContext);
    const isLoggedIn = authCtx.isLoggedIn;

    let style = {
        backgroundColor: props.colorScheme
    };
    
    function blueClickHandler(){
        props.setColorScheme("#325aa8");
    }

    function redClickHandler(){
        props.setColorScheme("#b50d3a");
    }

    function openLoginHandler(){
        props.setLoginOpen(true);
    }

    function logoutHandler(){
        authCtx.logout();
        props.setChangedFavourites(false);
    }

    return(
        <header style={style}>
            <div className="toggles">
                <div className="blue toggle" onClick={blueClickHandler}></div>
                <div className="red toggle" onClick={redClickHandler}></div>
            </div>
            <h1>Cat App</h1>
            <div className="login-section">
                {isLoggedIn && (<div>
                <p className="username">Hi {authCtx.username} <i class="fas fa-paw"></i></p>
                <button className="log-btn" onClick = {logoutHandler} style={style}>Logout</button></div>)}
                {!isLoggedIn && (<button className="log-btn" onClick = {openLoginHandler} style={style}>Login</button>)}
            </div>
        </header>
    )
}

export default Header;