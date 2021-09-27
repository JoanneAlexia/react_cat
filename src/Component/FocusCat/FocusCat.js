import "./FocusCat.css";
import EditRanking from "../EditRanking/EditRanking";


function FocusCat(props){
    return(
        <> 
            <div className="focusCat">
                <img src={props.url}></img> 
                <EditRanking></EditRanking>
            </div>
        </>
    );
}

export default FocusCat;