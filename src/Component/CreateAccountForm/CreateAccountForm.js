import './CreateAccountForm.css';
import axios from 'axios';
import React, {useState, useCallback, useRef} from "react";

function CreateAccountForm(props){
    const usernameInputRef = useRef();
    const passwordInputRef = useRef();
    const [userValid,setUserValid] = useState({valid: false, errorMessage: ""});
    const [error, setError] = useState(""); 

    function createAccountHandler(){
        //event.preventDefault();
        let usernameSubmitted = usernameInputRef.current.value;
        let passwordSubmitted = passwordInputRef.current.value;


        /*Validation
        if(!/^$|\s+/.test(usernameSubmitted)){
            //postUserData();
            style_error = {
                "display": "none"
            }
        }else{
            style_error = {
                "display": "block"
            }
        }*/

        usernameInputRef.current.ref = '';
        passwordInputRef.current.ref = '';
    }

    return (
        <div className="create-account form-container">
            <form className="create-account form">
                <h1>Create Account</h1>
                <label for="username">Username:</label><br></br>
                <input type="text" id="username" name="username" placeholder="Enter usermame..." ref={usernameInputRef}></input><br></br>
                <label for="password">Password:</label><br></br>
                <input type="text" id="password" name="password" placeholder="Enter password..." ref={passwordInputRef}></input><br></br>
                <p className="loginErrorMessage">{userValid.errorMessage}</p>
                <input onClick={createAccountHandler} type="submit" value="Create Account"></input>
            </form>
        </div>
    )   
}

export default CreateAccountForm;