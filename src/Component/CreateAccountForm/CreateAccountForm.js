import './CreateAccountForm.css';

function CreateAccountForm(props){

    return (
        <div className="create-account form-container">
            <form className="create-account form">
                <h1>Create Account</h1>
                <label for="username">Username:</label><br></br>
                <input type="text" id="username" name="username" placeholder="Enter usermame..."></input><br></br>
                <label for="password">Password:</label><br></br>
                <input type="text" id="password" name="password" placeholder="Enter password..."></input><br></br>
                <input type="submit" value="Create Account"></input>
            </form>
        </div>
    )   
}

export default CreateAccountForm;