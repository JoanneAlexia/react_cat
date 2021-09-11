import "./CurrentCat.css";
import axios from 'axios';
import React, {useState} from "react";

function CurrentCat(props) {
    const [currentCatInfo, setCurrentCatInfo] = useState({id: 1, url:"https://cdn2.thecatapi.com/images/bkk.jpg"});
    function newCatButtonClickHandler(){
        axios.get("https://api.thecatapi.com/v1/images/search").then(response => {
        setCurrentCatInfo({id: response.data[0].id, url:response.data[0].url});
      })
    };
    function favouriteCatClickHandler(){
        props.setFavourite([...props.favourite, {id: currentCatInfo.id, url:currentCatInfo.url}]);
    };

    let style = {
        backgroundColor: props.colorScheme
    };

    return(
        <div className="currentCat">
            <div className="buttons">
                <div className="catButton"><button style={style} onClick={newCatButtonClickHandler}><i class="fas fa-cat"></i> Show me another cat!</button></div>
                <div className="FavouriteButton">
                    <button style={style} onClick={favouriteCatClickHandler}><i className="far fa-grin-hearts"></i> This one's a favourite</button>
                </div>
            </div>
            <img src={currentCatInfo.url} alt="cat"/>
        </div>
    );
}

export default CurrentCat;