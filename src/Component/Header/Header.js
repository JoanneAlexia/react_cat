import './Header.css';



function Header(props){
    let style = {
        backgroundColor: props.colorScheme
    };

    function blueClickHandler(){
        props.setColorScheme("#325aa8");
    }

    function redClickHandler(){
        props.setColorScheme("#b50d3a");
    }

    return(
        <header style={style}>
            <div className="toggles">
                <div className="blue toggle" onClick={blueClickHandler}></div>
                <div className="red toggle" onClick={redClickHandler}></div>
            </div>
            <h1>Cat App</h1>
            <div className="login">
                <button style={style}>Log in</button>
            </div>
        </header>
    )
}

export default Header;