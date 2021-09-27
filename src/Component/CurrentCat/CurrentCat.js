import "./CurrentCat.css";
import axios from 'axios';
import React, {useEffect, useState, useCallback} from "react";

function CurrentCat(props) {
    const [currentCatInfo, setCurrentCatInfo] = useState({id: 1, url:"https://cdn2.thecatapi.com/images/bkk.jpg"});
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(""); 

    const newCatButtonClickHandler = useCallback(async () => {  
        setIsLoading(true);
        setError(null);
        try{
            const response = await axios.get("https://api.thecatapi.com/v1/images/search");
            setCurrentCatInfo({id: response.data[0].id, url:response.data[0].url});
            setIsLoading(false)
        }catch(error){
            setIsLoading(false);
            setError(error.message);
        }
    },[]);

    useEffect(() => {
        newCatButtonClickHandler()
    }, [newCatButtonClickHandler]);

    function favouriteCatClickHandler(){
        props.setFavourite([...props.favourite, {id: currentCatInfo.id, url:currentCatInfo.url}]);
    };

    let style = {
        backgroundColor: props.colorScheme
    };

    let catWindow;
    if(isLoading){
        catWindow = 
        <div className="loading-window">
            <div className="loading-message">
                <i class="fas fa-paw fa-spin"></i>
                <p>Loading...</p>
            </div>
        </div>
    }else{
        catWindow = 
        <img src={currentCatInfo.url} alt="cat"/>
    }

    if(!isLoading && error){
        catWindow = 
        <div className="loading-window">
            <div className="loading-message">
                <i class="fas fa-paw"></i>
                <p>Loading cat data failed. {error}</p>
            </div>
        </div>
    }
    
    return(
        <div className="currentCat">
            <div className="buttons">
                <div className="catButton"><button style={style} onClick={newCatButtonClickHandler}><i class="fas fa-cat"></i> Show me another cat!</button></div>
                <div className="FavouriteButton">
                    <button style={style} onClick={favouriteCatClickHandler}><i className="far fa-grin-hearts"></i> This one's a favourite</button>
                </div>
            </div>
            {catWindow}
        </div>
    );
}

export default CurrentCat;