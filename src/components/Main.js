import React, {useState} from 'react';
import Header from './Header';
import Cart from './Cart';
import axios from 'axios';


function Main() {

    const [moviesData, setMoviesData] = useState({
        picture: [],
        title: []
    });

    axios.get("https://yts.mx/api/v2/list_movies.json")
    .then(response => response.data.data.movies)
    .then(data => setMoviesData({
        ...moviesData,
        picture: data.map(x => x.medium_cover_image),
        title: data.map(x => x.title)
    }))

    return(
        <div>
            <Header/>
            <div className="main">
                <Cart id={"1"} picture={moviesData.picture[0]}/>
                <Cart id={"2"} picture={moviesData.picture[1]}/>
                <Cart id={"3"} picture={moviesData.picture[2]}/>
                <Cart id={"4"} picture={moviesData.picture[3]}/>
            </div>
            <div className="main">
                <Cart id={"5"} picture={moviesData.picture[4]}/>
                <Cart id={"6"} picture={moviesData.picture[5]}/>
                <Cart id={"7"} picture={moviesData.picture[6]}/>
                <Cart id={"8"} picture={moviesData.picture[7]}/>
            </div>
        </div>
    )
}

export default Main;