import "./FocusCat.css";

function FocusCat(props){
    return(
        <> 
            <div className="focusCat">
                <img src={props.url}></img>
            </div>
        </>
    );
}

export default FocusCat;