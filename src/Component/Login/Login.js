import './Login.css';
import {useRef, useContext,useState} from 'react';
import axios from 'axios';
import AuthContext from '../../store/auth-context';

function Login(props){
    const [errorMessage, setErrorMessage] = useState(null);
    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    const authCtx = useContext(AuthContext);

    function openCreateAccountHandler(){
        props.setCreateAccountOpen(true);
        props.setLoginOpen(false);
    }

    async function submitLoginHandler(event){
        event.preventDefault();
        
        const emailSubmitted = emailInputRef.current.value;
        const passwordSubmitted = passwordInputRef.current.value;

        try{
            const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBI33STzgTNmSua8Lia8xyePHS3oFqFKaU',
                {
                email: emailSubmitted, 
                password:passwordSubmitted,
                returnSecureToken: true },
                {header:{'Content-Type': 'application/json'}});

            if(response.status === 200){
                //Retrieve username data
                try{
                    const response_db = await axios.get("https://cat-app-abe7c-default-rtdb.firebaseio.com/users.json");
                    const expirationTime = new Date(new Date().getTime() + (+response.data.expiresIn*1000))
                    authCtx.login(response.data.idToken, expirationTime.toISOString(),response_db.data[response.data.localId].username,response.data.localId);
                    props.setLoginOpen(false);
                }catch(error){
                    console.log(error.message);
                }
                
            }else{
                setErrorMessage("Authentication Failed")
                if(response.data && response.data.error && response.data.error.message){
                    setErrorMessage(response.data.error.message);
                }    
            }
        }catch(error){
            setErrorMessage(error.response.data.error.message);
        }
    }

    return (
        <div className="login form-container">
            <form className="login form">
                <h1>Login</h1>
                <label for="email">Email:</label><br></br>
                <input type="text" id="email" name="email" placeholder="Enter email..." ref={emailInputRef}></input><br></br>
                <label for="password">Password:</label><br></br>
                <input type="text" id="password" name="password" placeholder="Enter password..." ref={passwordInputRef}></input><br></br>
                <input onClick={submitLoginHandler} type="submit" value="Login"></input>
                {errorMessage ? <p className="loginErrorMessage">{errorMessage}</p> : null}
                <a onClick={openCreateAccountHandler}>Create Account</a>
            </form>
        </div>
    )   
}

export default Login;