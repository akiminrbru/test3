import React, {useState} from 'react';
import Header from './Header';
import Cart from './Cart';
import axios from 'axios';


function Main() {

    const [moviesData, setMoviesData] = useState({
        picture: [],
        title: [],
        rating: [],
    });

    axios.get("https://yts.mx/api/v2/list_movies.json")
    .then(response => response.data.data.movies)
    .then(data => setMoviesData({
        ...moviesData,
        picture: data.map(x => x.medium_cover_image),
        title: data.map(x => x.title),
        rating: data.map(x => x.rating),
    }))

    return(
        <div>
            <Header/>
            <div className="main">
                <Cart id={"1"} id2={"a1"} id3={"p1"} id4={"t1"} picture={moviesData.picture[0]} rating={moviesData.rating[0]}/>
                <Cart id={"2"} id2={"a2"} id3={"p2"} id4={"t2"} picture={moviesData.picture[1]} rating={moviesData.rating[1]}/>
                <Cart id={"3"} id2={"a3"} id3={"p3"} id4={"t3"} picture={moviesData.picture[2]} rating={moviesData.rating[2]}/>
                <Cart id={"4"} id2={"a4"} id3={"p4"} id4={"t4"} picture={moviesData.picture[3]} rating={moviesData.rating[3]}/>
            </div>
            <div className="main">
                <Cart id={"5"} id2={"a5"} id3={"p5"} id4={"t5"} picture={moviesData.picture[4]} rating={moviesData.rating[4]}/>
                <Cart id={"6"} id2={"a6"} id3={"p6"} id4={"t6"} picture={moviesData.picture[5]} rating={moviesData.rating[5]}/>
                <Cart id={"7"} id2={"a7"} id3={"p7"} id4={"t7"} picture={moviesData.picture[6]} rating={moviesData.rating[6]}/>
                <Cart id={"8"} id2={"a8"} id3={"p8"} id4={"t8"} picture={moviesData.picture[7]} rating={moviesData.rating[7]}/>
            </div>
        </div>
    )
}

export default Main;