import './CreateAccountForm.css';
import axios from 'axios';
import React, {useState, useRef, useContext} from "react";
import AuthContext from '../../store/auth-context';

function CreateAccountForm(props){
    const emailInputRef = useRef();
    const usernameInputRef = useRef();
    const passwordInputRef = useRef();

    const authCtx = useContext(AuthContext);

    const [errorMessage, setErrorMessage] = useState(null); 

    async function createAccountHandler(event){
        event.preventDefault();
        const emailSubmitted = emailInputRef.current.value;
        const usernameSubmitted = usernameInputRef.current.value;
        const passwordSubmitted = passwordInputRef.current.value;

        try{
            const response = await axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBI33STzgTNmSua8Lia8xyePHS3oFqFKaU",
                {email: emailSubmitted, 
                password:passwordSubmitted,
                returnSecureToken: true },
                {header:{'Content-Type': 'application/json'}});
            if(response.status === 200){
                //Create database entry with ID email and username information listed. 
                try{
                    //newUser[emailSubmitted] = {username: usernameSubmitted, favouriteCats: []};
                    await axios.put("https://cat-app-abe7c-default-rtdb.firebaseio.com/users/"+response.data.localId+".json",
                    JSON.stringify({username: usernameSubmitted}));
                }catch(error){
                    console.log(error.message);
                }
                
                const expirationTime = new Date(new Date().getTime() + (+response.data.expiresIn*1000))
                authCtx.login(response.data.idToken, expirationTime.toISOString(),usernameSubmitted,response.data.localId);
                setErrorMessage(null);
                props.setCreateAccountOpen(false);
                


            }else{
                setErrorMessage("Authentication Failed")
                if(response.data && response.data.error && response.data.error.message){
                    setErrorMessage(response.data.error.message);

                }    
            }
        }catch(error){
            setErrorMessage(error.response.data.error.message);
        }

        //emailInputRef.current.ref = '';
        //passwordInputRef.current.ref = '';
    }

    return (
        <div className="create-account form-container">
            <form className="create-account form">
                <h1>Create Account</h1>
                <label for="email">Email:</label><br></br>
                <input type="text" id="email" name="email" placeholder="Enter email..." ref={emailInputRef}></input><br></br>
                <label for="username">Username:</label><br></br>
                <input type="text" id="username" name="username" placeholder="Enter username..." ref={usernameInputRef}></input><br></br>
                <label for="password">Password:</label><br></br>
                <input type="text" id="password" name="password" placeholder="Enter password..." ref={passwordInputRef}></input><br></br>
                {errorMessage ? <p className="loginErrorMessage">{errorMessage}</p> : null}
                <input onClick={createAccountHandler} type="submit" value="Create Account"></input>
            </form>
        </div>
    )   
}

export default CreateAccountForm;