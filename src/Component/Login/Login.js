import ReactDOM from 'react-dom';
import {CSSTransition} from 'react-transition-group';
import './Login.css';

function Login(props){

    let styleColor = {
        backgroundColor: props.colorScheme
    };

    function loginCloseHandler(){
        props.setLoginOpen(false);
    }

    return ReactDOM.createPortal(
        <CSSTransition 
            in={props.loginOpen}
            unmountOnExit
            timeout={{ enter:0, exit: 300}}>
            <div className={`login-form-container ${props.loginOpen ? "show" : ""}`}>
                <form style={styleColor} className="login-form">
                    <button className="login-form-close" onClick={loginCloseHandler} ><i class="fas fa-times"></i></button>
                    <h1>Login</h1>
                    <label for="username">Username:</label><br></br>
                    <input type="text" id="username" name="username" placeholder="Enter usermame..."></input><br></br>
                    <label for="password">Password:</label><br></br>
                    <input type="text" id="password" name="password" placeholder="Enter password..."></input><br></br>
                    <input type="submit" value="Enter"></input>
                </form>
            </div>
        </CSSTransition>, document.getElementById('modal')
    )
}

export default Login;