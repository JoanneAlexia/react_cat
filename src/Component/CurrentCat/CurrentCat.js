import "./CurrentCat.css";
import axios from 'axios';
import React, {useState} from "react";

function CurrentCat(props) {
    const [url, setUrl] = useState("https://cdn2.thecatapi.com/images/bkk.jpg");
    function newCatButtonClickHandler(){
        axios.get("https://api.thecatapi.com/v1/images/search").then(response => {
        setUrl(response.data[0].url);
      })
    };
    function favouriteCatClickHandler(){
        props.setFavourite(url);
    };

    return(
        <div className="currentCat">
            <div className="buttons">
                <div className="catButton"><button onClick={newCatButtonClickHandler}><i class="fas fa-cat"></i> Show me another cat!</button></div>
                <div className="FavouriteButton">
                    <button onClick={favouriteCatClickHandler}><i className="far fa-grin-hearts"></i> This one's a favourite</button>
                </div>
            </div>
            <img src={url} alt="cat"/>
        </div>
    );
}

export default CurrentCat;