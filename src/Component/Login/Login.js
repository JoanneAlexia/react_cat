import './Login.css';

function Login(props){
    
    function openCreateAccountHandler(){
        props.setCreateAccountOpen(true);
        props.setLoginOpen(false);
    }

    function submitLoginHandler(){
        //event.preventDefault();
        localStorage.setItem('isLoggedIn', '1');
        props.setIsLoggedIn(true);
    }

    return (
        <div className="login form-container">
            <form className="login form">
                <h1>Login</h1>
                <label for="username">Username:</label><br></br>
                <input type="text" id="username" name="username" placeholder="Enter usermame..."></input><br></br>
                <label for="password">Password:</label><br></br>
                <input type="text" id="password" name="password" placeholder="Enter password..."></input><br></br>
                <input onClick={submitLoginHandler} type="submit" value="Login"></input>
                <a onClick={openCreateAccountHandler}>Create Account</a>
            </form>
        </div>
    )   
}

export default Login;