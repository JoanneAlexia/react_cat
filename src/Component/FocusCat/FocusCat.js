import "./FocusCat.css";
import AuthContext from "../../store/auth-context";
import {useContext} from 'react';
import axios from "axios";

function FocusCat(props){
    const authCtx = useContext(AuthContext);
    
    async function deleteCatClickHandler(){  
        try{
            let userID = authCtx.userID;
            const response = await axios.delete("https://cat-app-abe7c-default-rtdb.firebaseio.com/users/"+userID+"/FavouriteCats/"+props.id+".json");
            props.setChangedFavourites(true);
            props.setFocusCat({show: false});
            props.setChangedFavourites(false);
        }catch(error){
            console.log(error)
        }
    };

    return(
        <> 
            <div className="focusCat">
                <img src={props.url}></img>
                <button onClick={deleteCatClickHandler}><i className="fas fa-trash-alt"></i></button>
            </div>
        </>
    );
}

export default FocusCat;