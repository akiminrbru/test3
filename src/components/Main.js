import React, {useState} from 'react';
import Header from './Header';
import Cart from './Cart';
import axios from 'axios';



function Main() {

    const [moviesData, setMoviesData] = useState( {
        movies: undefined
    });

    axios.get("https://yts.mx/api/v2/list_movies.json")
        .then(response => response.data.data.movies[0].medium_cover_image)
        .then(data => setMoviesData({
            ...moviesData,
            movies: data
        }));

    return(
        <div>
            <Header/>
            <div className="main">
                <Cart id={"1"} picture={moviesData.movies}/>
                <Cart id={"2"}/>
                <Cart id={"3"}/>
                <Cart id={"4"}/>
            </div>
            <div className="main">
                <Cart id={"5"}/>
                <Cart id={"6"}/>
                <Cart id={"7"}/>
                <Cart id={"8"}/>
            </div>
        </div>
    )
}

export default Main;