import './FavouritesBoard.css';
import FavouriteCat from '../FavouriteCat/FavouriteCat';

function FavouritesBoard(props) {
    let style = {
        backgroundColor: props.colorScheme
    };

    return(
        <div onClick = {props.onClick} style={style} className="favourite_board">
            <h2 className="favourite_board_heading">Favourites Board</h2>
            <div className="favourite_cat_images">
                {props.favourite.map(cat => {
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