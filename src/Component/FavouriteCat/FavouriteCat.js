import './FavouriteCat.css'

function FavouriteCat(props){
    function onClickHandler(){
        props.setFocusCat({show: true, id: props.id, url: props.src})
    }
    let style = {
        backgroundColor: props.colorScheme
    };
    return(
        <div className="favourite_cat">
            <img className="favourite_cat_img" 
                onClick={onClickHandler} 
                src={props.src}></img>
        </div>
    );
}

export default FavouriteCat;
