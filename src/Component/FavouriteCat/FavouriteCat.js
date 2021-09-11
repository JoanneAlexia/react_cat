import './FavouriteCat.css'

function FavouriteCat(props) {
    let style = {
        backgroundColor: props.colorScheme
    };

    console.log(props.favourite.url);

    return(
        <div style={style} className="favourite_board">
            <h2 className="favourite_board_heading">Favourites Board</h2>
            <div className="favourite_cat_images">
                {props.favourite.map(cat => {
                     return (<img key={cat.id} className="favourite_cat_img" src={cat.url}/>)})}
            </div>
        </div>
        
    )
}

export default FavouriteCat;