import React, {useState, useEffect, useCallback} from 'react';

let logoutTimer;

const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false, 
    username: null,
    userID: null,
    login: (token) => {},
    logout: () => {}
});

const calulateRemainingTime = (expirationTime) => {
    const currentTime = new Date().getTime();
    const adjExpirationTime = new Date(expirationTime).getTime(); //Convert expiration time to date object

    const remainingTime = adjExpirationTime - currentTime;

    return remainingTime;
}

const retrieveStoredToken = () => {
    const storedToken = localStorage.getItem('token');
    const storedExpirationDate = localStorage.getItem('expirationTime');
    const username = localStorage.getItem('username');
    const userID = localStorage.getItem('userID');

    const remainingTime = calulateRemainingTime(storedExpirationDate);

    if(remainingTime < 0){
        localStorage.removeItem('token');
        localStorage.removeItem('expirationTime');
        localStorage.removeItem('username');
        localStorage.removeItem('userID');

        return null;
    }

    return { 
        token: storedToken,
        duration: remainingTime,
        username: username, 
        userID: userID}
            
};

export const AuthContextProvider = (props) => {
    const tokenData = retrieveStoredToken();

    let initalToken;
    let initalUsername;
    let initalUserID;
    
    if(tokenData){
        initalToken = tokenData.token;
        initalUsername = tokenData.username;
        initalUserID = tokenData.userID;

    }
    const [token, setToken] = useState(initalToken);
    const userIsLoggedIn = !!token;

    const [username, setUsername] = useState(initalUsername);
    const [userID,setUserID] = useState(initalUserID);

    const logoutHandler = useCallback(() => {
        setToken(null);
        setUsername(null);
        setUserID(null);
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        localStorage.removeItem('userID');

        if(logoutTimer){
            clearTimeout(logoutTimer);
        }
        
    },[]);

    const loginHandler = (token,expirationTime,username,userID) => {
        setToken(token);
        localStorage.setItem('token', token);
        localStorage.setItem('expirationTime', expirationTime);

        setUsername(username);
        localStorage.setItem('username',username);
        setUserID(userID);
        localStorage.setItem('userID',userID);

        const remainingTime = calulateRemainingTime(expirationTime);

        logoutTimer = setTimeout(logoutHandler,remainingTime);

        
    };

    useEffect(() => {
        if(tokenData){
            logoutTimer = setTimeout(logoutHandler,tokenData.duration);
        }
    }, [tokenData,logoutHandler]);

    const contextValue = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        username: username,
        userID: userID, 
        login: loginHandler,
        logout: logoutHandler
    }

    return <AuthContext.Provider
        value={contextValue}>
        {props.children}
    </AuthContext.Provider>
}

export default AuthContext;