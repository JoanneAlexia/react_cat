import './FavouriteCat.css'

function FavouriteCat(props){
    function onClickHandler(){
        props.setFocusCat({show: true, url: props.src})
    }
    let style = {
        backgroundColor: props.colorScheme
    };
    return(
        <div className="favourite_cat">
            <img className="favourite_cat_img" 
                onClick={onClickHandler} 
                key={props.key} 
                src={props.src} ></img>
            <div style={style} className="ranking">1</div>
        </div>
    );
}

export default FavouriteCat;
