import './FavouritesBoard.css';
import FavouriteCat from '../FavouriteCat/FavouriteCat';
import axios from 'axios';
import {useEffect, useState} from 'react';

function FavouritesBoard(props) {
    const [favouriteCats, setFavouriteCats] = useState([]);
    
    let style = {
        backgroundColor: props.colorScheme
    };

    
   useEffect(async () => {
        try{
            const response = await axios.get("https://cat-app-abe7c-default-rtdb.firebaseio.com/users.json");
            setFavouriteCats(response.data);
        }catch(error){
            console.log(error.message);
        }
    },[props.changedFavourites]);

    return(
        <div onClick = {props.onClick} style={style} className="favourite_board">
            <h2 className="favourite_board_heading">Favourites Board</h2>
            <div className="favourite_cat_images">
                { Object.values(favouriteCats).map(cat => {
                     return (<FavouriteCat 
                                colorScheme={props.colorScheme}
                                focusCat={props.focusCat} 
                                setFocusCat={props.setFocusCat} 
                                key={cat.id} 
                                src={cat.url}></FavouriteCat>)})}
            </div>
        </div>
        
    )
}

export default FavouritesBoard;