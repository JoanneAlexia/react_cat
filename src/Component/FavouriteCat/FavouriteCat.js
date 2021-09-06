import './FavouriteCat.css'

function FavouriteCat(props) {
    let style = {
        backgroundColor: props.colorScheme
    };
    return(
        <div style={style} class="favourite_board">
            <h2 class="favourite_board_heading">Favourites Board</h2>
            <div class="favourite_cat_images">
                <img class="favourite_cat_img" src={props.url}/>
                <img class="favourite_cat_img" src={props.url}/>
                <img class="favourite_cat_img" src={props.url}/>
                <img class="favourite_cat_img" src={props.url}/>
                <img class="favourite_cat_img" src={props.url}/>
                <img class="favourite_cat_img" src={props.url}/>
            </div>
        </div>
        
    )
}

export default FavouriteCat;