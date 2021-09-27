import './Login.css';

function Login(props){

    return (
        <div className="login-form-container">
            <form className="login-form">
                <h1>Login</h1>
                <label for="username">Username:</label><br></br>
                <input type="text" id="username" name="username" placeholder="Enter usermame..."></input><br></br>
                <label for="password">Password:</label><br></br>
                <input type="text" id="password" name="password" placeholder="Enter password..."></input><br></br>
                <input type="submit" value="Enter"></input>
            </form>
        </div>
    )   
}

export default Login;