import './FavouritesBoard.css';
import FavouriteCat from '../FavouriteCat/FavouriteCat';
import axios from 'axios';
import {useEffect, useState,useContext} from 'react';
import AuthContext from '../../store/auth-context';

function FavouritesBoard(props) {
    const [favouriteCats, setFavouriteCats] = useState([]);
    const authCtx = useContext(AuthContext);
    
    let style = {
        backgroundColor: props.colorScheme
    };

   useEffect(() => {
       async function getCatData(){
        try{
            let userID = authCtx.userID;
            const response = await axios.get("https://cat-app-abe7c-default-rtdb.firebaseio.com/users/"+userID+"/FavouriteCats.json");
            setFavouriteCats(response.data);
        }catch(error){
            console.log(error.message);
        }
       }
       getCatData()
    });
    
    return(
        <div onClick = {props.onClick} style={style} className="favourite_board">
            <h2 className="favourite_board_heading">Favourites Board</h2>
            <div className="favourite_cat_images">
            { favouriteCats? Object.keys(favouriteCats).map(catId => {
                     return (<FavouriteCat 
                                id={catId}
                                colorScheme={props.colorScheme}
                                focusCat={props.focusCat} 
                                setFocusCat={props.setFocusCat} 
                                src={favouriteCats[catId].url}></FavouriteCat>)}):null}
            </div>
        </div>
        
    )
}

export default FavouritesBoard;

                /*{ favouriteCats? Object.values(favouriteCats).map(cat => {
                     return (<FavouriteCat 
                                colorScheme={props.colorScheme}
                                focusCat={props.focusCat} 
                                setFocusCat={props.setFocusCat} 
                                src={cat.url}></FavouriteCat>)}):null}*/

                                /*return (<FavouriteCat 
                            id={id}
                            colorScheme={props.colorScheme}
                            focusCat={props.focusCat} 
                            setFocusCat={props.setFocusCat} 
                            src={url}></FavouriteCat>)*/